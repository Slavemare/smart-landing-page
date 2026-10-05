import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Trebate li pomoć? Kontaktirajte našu podršku.
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Naš tim za podršku kontaktiraće Vas u najkraćem mogućem roku.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Vaše ime
                      </label>
                      <input
                        type="text"
                        placeholder="Unesite ime"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Unesite Email
                      </label>
                      <input
                        type="email"
                        placeholder="Unesite email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Vaša poruka
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Unesite poruku"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-emerald-600 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 w-full lg:w-1/4">
                      Pošaljite upit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="rounded bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 text-white shadow-xl lg:p-10">
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
                      className="mt-1 block font-montserrat text-sm transition hover:text-emerald-400 text-black dark:text-white"
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
                      className="mt-1 block font-montserrat text-sm transition hover:text-emerald-400 text-black dark:text-white"
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
              <div className="mt-8 border-t border-black dark:border-white pt-6">
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
