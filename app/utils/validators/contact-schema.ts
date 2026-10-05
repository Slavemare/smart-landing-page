import { z } from "zod";

export const contactSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Ime mora imati najmanje 2 karaktera.")
      .max(100, "Ime je predugačko."),

    email: z
      .string()
      .trim()
      .email("Unesite ispravnu email adresu.")
      .max(254, "Email adresa je predugačka."),

    message: z
      .string()
      .trim()
      .min(4, "Poruka mora imati najmanje 10 karaktera.")
      .max(5000, "Poruka ne može biti duža od 5000 karaktera."),

    // Honeypot polje za jednostavne spam botove.
    // Pravi korisnik ga ne popunjava.
    website: z.string().max(0, "Spam detektovan.").optional(),

    turnstileToken: z
      .string()
      .min(1, "Turnstile provjera nije završena.")
      .max(2048, "Neispravan Turnstile token."),
  })
  .strict();

export type ContactInput = z.infer<typeof contactSchema>;
