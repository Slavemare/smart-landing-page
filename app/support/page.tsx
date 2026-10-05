import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SmartCash doo - platna institucija",
  description: "Vaš partner za moderna platna rješenja",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Podrška dostupna 24/7"
        description="Naš tim vam je na raspolaganju 24 sata dnevno, 7 dana u sedmici, kako biste u svakom trenutku mogli dobiti potrebne informacije i podršku."
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-4 ">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-dark md:p-10 lg:p-12">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-emerald-600" />

          <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg md:leading-9">
            Finansijske usluge ne prestaju kada se završi radno vrijeme – zato
            je i naša podrška dostupna 24 sata dnevno, 7 dana u sedmici. Bez
            obzira da li imate pitanje o našim platnim uslugama, potrebna vam je
            informacija o transakciji ili pomoć u vezi sa korištenjem naših
            usluga, naš tim je tu da vam pruži pravovremenu i pouzdanu podršku.
            Naš cilj je da svaki korisnik dobije jasne informacije i odgovore
            kada su mu potrebni. Možete nam se obratiti za pomoć u vezi sa
            platnim uslugama, izvršenim transakcijama, međunarodnim doznakama,
            procedurama i drugim pitanjima. Dostupnost podrške 24/7 omogućava
            vam da se osjećate sigurno i kada je pomoć potrebna van uobičajenog
            radnog vremena. Bez obzira na vrijeme, možete računati na naš tim i
            profesionalan pristup svakom vašem zahtjevu.{" "}
            <strong className="font-semibold text-gray-900 dark:text-white">
              Tu smo za vas – 24 sata dnevno, 7 dana u sedmici.
            </strong>
          </p>

          {/* Kontakt */}
          <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
            <p className="font-montserrat text-base leading-7 text-gray-600 dark:text-gray-300">
              Imate pitanja vezana za podršku ili neka druga pitanja? Slobodno
              nam se obratite, naš tim je tu da vam pruži potrebne informacije i
              pomoć.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-montserrat text-sm font-semibold text-white transition duration-300 hover:bg-emerald-500 w-full md:w-1/4"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
