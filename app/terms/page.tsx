import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartCash doo - Platna institucija",
  description: "Vaš partner za moderna platna rješenja",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Uslovi korištenja"
        description="Saznajte više o pravilima, pravima i obavezama vezanim za korištenje naših usluga."
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-dark md:p-10 lg:p-12">
          {/* Dekorativna zelena linija */}
          <div className="absolute left-0 top-0 h-full w-1.5 bg-emerald-600" />

          {/* 1. Opšte odredbe */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              1. Opšte odredbe
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Dobro došli na našu internet stranicu. Korištenjem ove internet
              stranice prihvatate ove Uslove korištenja i obavezujete se da ćete
              ih poštovati. Ovi uslovi definišu pravila korištenja naše internet
              stranice, sadržaja koji je na njoj dostupan i informacija o našim
              platnim i drugim finansijskim uslugama. Ukoliko se ne slažete sa
              ovim uslovima, molimo vas da ne koristite ovu internet stranicu.
            </p>
          </section>

          {/* 2. Korištenje internet stranice */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              2. Korištenje internet stranice
            </h2>

            <p className="mb-4 font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Internet stranica namijenjena je pružanju informacija o našoj
              instituciji, uslugama i načinu njihovog korištenja. Korisnik se
              obavezuje da će internet stranicu koristiti na zakonit i odgovoran
              način i da neće pokušavati da:
            </p>

            <ul className="ml-5 list-disc space-y-2 font-montserrat text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
              <li>neovlašteno pristupa sistemima ili podacima;</li>
              <li>narušava sigurnost ili funkcionalnost internet stranice;</li>
              <li>koristi stranicu za nezakonite aktivnosti;</li>
              <li>
                unosi ili prenosi zlonamjerni softver ili drugi štetan sadržaj;
              </li>
              <li>
                koristi sadržaj stranice na način kojim se krše prava drugih
                lica.
              </li>
            </ul>

            <p className="mt-4 font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Zadržavamo pravo da ograničimo ili onemogućimo pristup internet
              stranici korisnicima koji krše ove uslove ili važeće propise.
            </p>
          </section>

          {/* 3. Informacije o uslugama */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              3. Informacije o uslugama
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Informacije objavljene na internet stranici namijenjene su opštem
              informisanju korisnika. Iako nastojimo da sve informacije budu
              tačne, potpune i ažurne, pojedine informacije mogu biti
              izmijenjene bez prethodne najave zbog promjena u našim uslugama,
              poslovanju ili regulatornim zahtjevima. Za konkretne uslove,
              naknade, procedure i druge informacije koje se odnose na
              pojedinačne platne usluge, korisnik treba da se obrati našim
              ovlaštenim kanalima komunikacije.
            </p>
          </section>

          {/* 4. Platne usluge */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              4. Platne usluge
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Pružanje platnih usluga podliježe odgovarajućim uslovima,
              procedurama i važećim propisima. Za pojedine usluge može biti
              potrebno dostavljanje identifikacionih i drugih podataka, kao i
              ispunjavanje dodatnih zakonskih ili regulatornih zahtjeva.
              Korištenje određene platne usluge može biti uslovljeno njenom
              dostupnošću, primjenjivim pravilima i ispunjavanjem propisanih
              uslova.
            </p>
          </section>

          {/* 5. Odgovornost korisnika */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              5. Odgovornost korisnika
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Korisnik je odgovoran za tačnost i potpunost podataka koje
              dostavlja prilikom korištenja naših usluga ili komunikacije sa
              nama. Korisnik se obavezuje da neće koristiti naše usluge,
              internet stranicu ili druge dostupne sisteme na način koji može
              ugroziti sigurnost, prava drugih korisnika ili zakonito poslovanje
              institucije.
            </p>
          </section>

          {/* 6. Dostupnost internet stranice */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              6. Dostupnost internet stranice
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Nastojimo da internet stranica bude dostupna i funkcionalna u
              svakom trenutku. Međutim, ne možemo garantovati neprekidnu
              dostupnost zbog mogućih tehničkih problema, održavanja,
              nadogradnji, prekida komunikacionih mreža ili drugih okolnosti
              koje ne možemo u potpunosti kontrolisati. Zadržavamo pravo da
              privremeno ograničimo ili obustavimo dostupnost pojedinih dijelova
              stranice radi održavanja, sigurnosti ili unapređenja sistema.
            </p>
          </section>

          {/* 7. Intelektualno vlasništvo */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              7. Intelektualno vlasništvo
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Sadržaj internet stranice, uključujući tekstove, logotipe,
              grafičke elemente, dizajn, fotografije, ilustracije i druge
              materijale, zaštićen je odgovarajućim pravima i ne smije se
              koristiti, kopirati, distribuirati ili mijenjati bez prethodnog
              odobrenja, osim kada je takvo korištenje dozvoljeno važećim
              propisima.
            </p>
          </section>

          {/* 8. Eksterni linkovi */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              8. Eksterni linkovi
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Naša internet stranica može sadržavati poveznice ka internet
              stranicama ili servisima trećih lica. Takve poveznice mogu biti
              dostupne radi dodatnih informacija ili korisničke pogodnosti. Ne
              preuzimamo odgovornost za sadržaj, sigurnost, dostupnost ili
              pravila privatnosti internet stranica trećih lica.
            </p>
          </section>

          {/* 9. Ograničenje odgovornosti */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              9. Ograničenje odgovornosti
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Preduzimamo razumne mjere kako bismo osigurali tačnost i sigurnost
              informacija dostupnih na našoj internet stranici. Međutim, u mjeri
              dozvoljenoj važećim propisima, ne možemo garantovati da će
              internet stranica uvijek biti bez grešaka, tehničkih problema ili
              prekida. Informacije na internet stranici ne treba tumačiti kao
              zamjenu za konkretne uslove i dokumentaciju koja se primjenjuje na
              pojedinačne platne usluge.
            </p>
          </section>

          {/* 10. Izmjene */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              10. Izmjene Uslova korištenja
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Možemo povremeno izmijeniti ili dopuniti ove Uslove korištenja
              kako bismo ih uskladili sa promjenama naših usluga, poslovanja,
              tehnologije ili važećih propisa. Ažurirana verzija biće objavljena
              na ovoj internet stranici. Nastavak korištenja internet stranice
              nakon objavljivanja izmjena smatraće se prihvatanjem izmijenjenih
              uslova.
            </p>
          </section>

          {/* 11. Primjenjivi propisi */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              11. Primjenjivi propisi
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Na ove Uslove korištenja primjenjuju se važeći propisi koji
              uređuju poslovanje institucije, platne usluge, zaštitu korisnika i
              druga relevantna pitanja. U slučaju neslaganja između ovih Uslova
              korištenja i obaveznih odredbi važećih propisa, primjenjivaće se
              relevantne zakonske odredbe.
            </p>
          </section>

          {/* 12. Kontakt */}
          <section className="mb-2">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              12. Kontakt
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Ukoliko imate pitanja u vezi sa ovim Uslovima korištenja, našim
              uslugama ili načinom korištenja internet stranice, možete nam se
              obratiti putem dostupnih kontakt kanala.
            </p>

            <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20 md:p-6">
              <p className="font-montserrat text-base font-semibold leading-7 text-gray-900 dark:text-white md:text-lg">
                Za sva dodatna pitanja stojimo vam na raspolaganju.
              </p>

              <p className="mt-3 font-montserrat text-sm text-gray-500 dark:text-gray-400">
                <strong>Posljednje ažuriranje:</strong> 01.01.2027
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
