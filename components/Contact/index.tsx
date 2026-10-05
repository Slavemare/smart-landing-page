"use client";

import { useState } from "react";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { Turnstile } from "@marsidev/react-turnstile";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [turnstileToken, setTurnstileToken] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatusMessage("");
    setStatusType("");

    if (!turnstileToken) {
      setStatusMessage("Molimo završite sigurnosnu provjeru.");
      setStatusType("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          website: "",
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Contact API error:", data);

        setStatusMessage(
          data?.message || "Došlo je do greške. Molimo pokušajte ponovo."
        );

        setStatusType("error");
        return;
      }

      setStatusMessage(data?.message || "Poruka je uspješno poslana.");
      setStatusType("success");

      setName("");
      setEmail("");
      setMessage("");
      setTurnstileToken("");
    } catch (error) {
      console.error("Contact form error:", error);

      setStatusMessage(
        "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo."
      );
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Trebate li pomoć? Kontaktirajte našu podršku.
              </h2>

              <p className="mb-12 text-base font-medium text-body-color">
                Naš tim za podršku kontaktiraće Vas u najkraćem mogućem roku.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Ime */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Vaše ime
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Unesite ime"
                        maxLength={100}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Unesite Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Unesite email"
                        maxLength={254}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Poruka */}
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Vaša poruka
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Unesite poruku"
                        maxLength={5000}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    value=""
                    readOnly
                  />

                  {/* Cloudflare Turnstile */}
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <Turnstile
                        siteKey={
                          process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
                        }
                        onSuccess={(token) => {
                          setTurnstileToken(token);
                        }}
                        onExpire={() => {
                          setTurnstileToken("");
                        }}
                        onError={() => {
                          setTurnstileToken("");
                        }}
                      />
                    </div>
                  </div>

                  {/* Status poruka */}
                  {statusMessage && (
                    <div className="w-full px-4">
                      <div
                        className={`mb-6 rounded-sm px-4 py-3 text-sm font-medium ${
                          statusType === "success"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                      >
                        {statusMessage}
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="shadow-submit dark:shadow-submit-dark w-full rounded-sm bg-emerald-600 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 lg:w-1/4"
                    >
                      {isSubmitting ? "Šaljem..." : "Pošaljite upit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* DESNA STRANA */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 p-8 text-white shadow-xl dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 lg:p-10">
              <div className="mb-8">
                <span className="mb-3 block font-montserrat text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
                  Kontakt
                </span>

                <h3 className="font-montserrat text-2xl font-bold leading-tight text-black dark:text-white">
                  Tu smo za vas
                </h3>

                <p className="mt-3 font-montserrat text-sm leading-relaxed text-black dark:text-white">
                  Imate pitanje ili vam je potrebna dodatna informacija?
                  Kontaktirajte nas i naš tim će vam rado pomoći.
                </p>
              </div>

              <div className="space-y-6">
                {/* Adresa */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-white">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>

                  <div>
                    <p className="font-montserrat text-sm font-semibold text-black dark:text-white">
                      Adresa
                    </p>

                    <p className="mt-1 font-montserrat text-sm leading-relaxed text-black dark:text-white">
                      Kneginja Milice 16
                      <br />
                      76300 Bijeljina
                    </p>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-white">
                    <FaPhoneAlt className="text-lg" />
                  </div>

                  <div>
                    <p className="font-montserrat text-sm font-semibold text-black dark:text-white">
                      Telefon
                    </p>

                    <a
                      href="tel:+38765000000"
                      className="mt-1 block font-montserrat text-sm text-black transition hover:text-emerald-400 dark:text-white"
                    >
                      +387 65 000 000
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-white">
                    <FaEnvelope className="text-lg" />
                  </div>

                  <div>
                    <p className="font-montserrat text-sm font-semibold text-black dark:text-white">
                      Email
                    </p>

                    <a
                      href="mailto:info@vasafirma.ba"
                      className="mt-1 block font-montserrat text-sm text-black transition hover:text-emerald-400 dark:text-white"
                    >
                      info@vasafirma.ba
                    </a>
                  </div>
                </div>

                {/* Radno vrijeme */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400 text-white">
                    <FaClock className="text-lg" />
                  </div>

                  <div>
                    <p className="font-montserrat text-sm font-semibold text-black dark:text-white">
                      Radno vrijeme
                    </p>

                    <p className="mt-1 font-montserrat text-sm leading-relaxed text-black dark:text-white">
                      Pon - Pet: 07:00 - 19:00
                      <br />
                      Subota: 07:00 - 15:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Donji dio */}
              <div className="mt-8 border-t border-black pt-6 dark:border-white">
                <p className="font-montserrat text-xs leading-relaxed text-black dark:text-white">
                  Za sva pitanja i dodatne informacije slobodno nam se obratite.
                  Naš tim je tu da vam pruži podršku.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
