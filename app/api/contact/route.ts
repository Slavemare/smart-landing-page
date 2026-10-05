import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/app/utils/validators/contact-schema";

export const runtime = "nodejs";

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();

  const existing = rateLimitStore.get(ip);

  if (!existing || now >= existing.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return {
      allowed: true,
      retryAfter: 0,
    };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;

  return {
    allowed: true,
    retryAfter: 0,
  };
}

export async function POST(request: NextRequest) {
  try {
    /*
     * 1. Provjera Content-Type
     */
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Neispravan format zahtjeva.",
        },
        { status: 415 }
      );
    }

    /*
     * 2. Rate limit
     */
    const ip = getClientIp(request);

    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Previše pokušaja. Molimo pokušajte ponovo za nekoliko minuta.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfter),
          },
        }
      );
    }

    /*
     * 3. Ograničenje veličine request body-ja
     */
    const rawBody = await request.text();

    if (rawBody.length > 15_000) {
      return NextResponse.json(
        {
          success: false,
          message: "Zahtjev je prevelik.",
        },
        { status: 413 }
      );
    }

    /*
     * 4. JSON parsing
     */
    let body: unknown;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Neispravan zahtjev.",
        },
        { status: 400 }
      );
    }

    /*
     * 5. Zod validacija
     */
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Provjerite unesene podatke.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message, website, turnstileToken } = result.data;

    /*
     * 6. Honeypot
     */
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Poruka je uspješno poslana.",
      });
    }

    /*
     * 7. Provjera environment varijabli
     */
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!turnstileSecret || !gmailUser || !gmailPassword || !contactEmail) {
      console.error("Contact form environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Servis trenutno nije dostupan.",
        },
        { status: 500 }
      );
    }

    /*
     * 8. Cloudflare Turnstile verification
     */
    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
        cache: "no-store",
      }
    );

    if (!turnstileResponse.ok) {
      console.error("Turnstile verification request failed.");

      return NextResponse.json(
        {
          success: false,
          message: "Sigurnosna provjera nije uspjela.",
        },
        { status: 400 }
      );
    }

    const turnstileResult = await turnstileResponse.json();

    if (!turnstileResult.success) {
      console.error("Turnstile verification failed:", turnstileResult);

      return NextResponse.json(
        {
          success: false,
          message: "Sigurnosna provjera nije uspjela.",
        },
        { status: 400 }
      );
    }

    /*
     * 9. Slanje emaila
     *
     * Namjerno koristimo plain text,
     * a ne HTML.
     */
    await transporter.sendMail({
      from: gmailUser,
      to: contactEmail,
      replyTo: email,
      subject: "Nova poruka sa kontakt forme",
      text: [
        "Nova poruka sa kontakt forme",
        "",
        `Ime: ${name}`,
        `Email: ${email}`,
        "",
        "Poruka:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({
      success: true,
      message: "Poruka je uspješno poslana.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Došlo je do greške. Molimo pokušajte ponovo.",
      },
      { status: 500 }
    );
  }
}
