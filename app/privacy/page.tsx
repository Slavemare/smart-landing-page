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
        pageName="Politika privatnosti"
        description="Vaša privatnost i sigurnost ličnih podataka su nam prioritet. Saznajte kako prikupljamo, koristimo i štitimo vaše podatke."
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-dark md:p-10 lg:p-12">
          {/* Dekorativna zelena linija */}
          <div className="absolute left-0 top-0 h-full w-1.5 bg-emerald-600" />

          {/* 1. Uvod */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              1. Uvod
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Zaštita privatnosti i ličnih podataka naših korisnika predstavlja
              jedan od osnovnih principa našeg poslovanja. Posvećeni smo
              odgovornom, sigurnom i transparentnom postupanju sa ličnim
              podacima koje prikupljamo i obrađujemo prilikom korištenja naših
              usluga. Ova Politika privatnosti objašnjava koje podatke
              prikupljamo, u koje svrhe ih koristimo, na koji način ih štitimo i
              koja prava korisnici imaju u vezi sa svojim ličnim podacima.
            </p>
          </section>

          {/* 2. Koje podatke prikupljamo */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              2. Koje podatke prikupljamo?
            </h2>

            <p className="mb-4 font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              U zavisnosti od vrste usluge koju koristite i načina komunikacije
              sa nama, možemo prikupljati različite vrste podataka, uključujući:
            </p>

            <ul className="ml-5 list-disc space-y-2 font-montserrat text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
              <li>ime i prezime;</li>
              <li>
                kontakt podatke, kao što su broj telefona, adresa elektronske
                pošte i adresa;
              </li>
              <li>podatke potrebne za identifikaciju korisnika;</li>
              <li>podatke o izvršenim platnim transakcijama;</li>
              <li>podatke potrebne za izvršavanje platnih usluga;</li>
              <li>podatke koje nam dostavite prilikom komunikacije sa nama;</li>
              <li>
                tehničke podatke koji se automatski prikupljaju prilikom
                korištenja naše internet stranice.
              </li>
            </ul>

            <p className="mt-4 font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Prikupljamo samo podatke koji su potrebni za ostvarivanje
              konkretne svrhe i pružanje naših usluga, u skladu sa važećim
              propisima.
            </p>
          </section>

          {/* 3. Svrha obrade */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              3. Svrha obrade ličnih podataka
            </h2>

            <p className="mb-4 font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Lične podatke možemo koristiti u svrhe kao što su:
            </p>

            <ul className="ml-5 list-disc space-y-2 font-montserrat text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
              <li>pružanje i izvršavanje platnih usluga;</li>
              <li>obrada i evidentiranje platnih transakcija;</li>
              <li>identifikacija i verifikacija korisnika;</li>
              <li>ispunjavanje zakonskih i regulatornih obaveza;</li>
              <li>
                sprečavanje zloupotreba, prevara i drugih nezakonitih
                aktivnosti;
              </li>
              <li>
                komunikacija sa korisnicima i pružanje korisničke podrške;
              </li>
              <li>unapređenje kvaliteta naših usluga i sistema;</li>
              <li>zaštita sigurnosti naših informacionih sistema;</li>
              <li>
                ostvarivanje i zaštita naših legitimnih poslovnih interesa, u
                skladu sa važećim propisima.
              </li>
            </ul>
          </section>

          {/* 4. Pravna osnova */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              4. Pravna osnova za obradu
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Obrada ličnih podataka vrši se na osnovu jedne ili više pravnih
              osnova predviđenih važećim propisima o zaštiti ličnih podataka. U
              zavisnosti od konkretne svrhe, obrada može biti neophodna radi
              izvršavanja ugovora, ispunjavanja zakonskih obaveza, ostvarivanja
              legitimnih interesa ili na osnovu saglasnosti korisnika kada je
              ona potrebna.
            </p>
          </section>

          {/* 5. Zaštita i sigurnost */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              5. Zaštita i sigurnost podataka
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Primjenjujemo odgovarajuće tehničke, organizacione i sigurnosne
              mjere kako bismo zaštitili lične podatke od neovlaštenog pristupa,
              gubitka, izmjene, uništenja ili druge neovlaštene obrade.
              Sigurnost podataka kontinuirano unapređujemo kroz odgovarajuće
              procedure, kontrole i savremena tehnološka rješenja. Ipak, nijedan
              način prenosa ili čuvanja podataka putem interneta ne može
              garantovati apsolutnu sigurnost, zbog čega kontinuirano radimo na
              smanjenju mogućih sigurnosnih rizika.
            </p>
          </section>

          {/* 6. Dijeljenje */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              6. Dijeljenje ličnih podataka
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Lične podatke ne prodajemo niti ih ustupamo trećim licima za
              njihove vlastite marketinške svrhe. Podaci mogu biti dostupni
              ovlaštenim partnerima, pružaocima usluga i drugim subjektima kada
              je to potrebno za izvršavanje platnih usluga, funkcionisanje naših
              sistema ili ispunjavanje zakonskih i regulatornih obaveza. U
              slučajevima kada smo zakonski obavezni, lični podaci mogu biti
              dostavljeni nadležnim institucijama i drugim ovlaštenim organima.
              Svim subjektima kojima su podaci dostupni dozvoljen je pristup
              samo u obimu koji je potreban za konkretnu svrhu i u skladu sa
              važećim propisima.
            </p>
          </section>

          {/* 7. Čuvanje */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              7. Čuvanje ličnih podataka
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Lične podatke čuvamo onoliko dugo koliko je potrebno za
              ostvarivanje svrhe za koju su prikupljeni, odnosno u rokovima
              propisanim relevantnim zakonima i regulatornim zahtjevima. Nakon
              isteka perioda čuvanja, podaci se brišu, uništavaju ili
              anonimizuju, osim ako postoji druga zakonska osnova za njihovo
              dalje čuvanje.
            </p>
          </section>

          {/* 8. Prava korisnika */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              8. Prava korisnika
            </h2>

            <p className="mb-4 font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              U skladu sa važećim propisima o zaštiti ličnih podataka, korisnici
              mogu imati pravo da:
            </p>

            <ul className="ml-5 list-disc space-y-2 font-montserrat text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
              <li>dobiju informacije o obradi svojih ličnih podataka;</li>
              <li>zatraže pristup svojim ličnim podacima;</li>
              <li>zatraže ispravku netačnih ili nepotpunih podataka;</li>
              <li>
                zatraže brisanje podataka kada za to postoje zakonski uslovi;
              </li>
              <li>
                zatraže ograničenje obrade u slučajevima predviđenim propisima;
              </li>
              <li>ulože prigovor na određene vrste obrade;</li>
              <li>
                povuku datu saglasnost kada se obrada zasniva na saglasnosti;
              </li>
              <li>ostvare druga prava predviđena važećim propisima.</li>
            </ul>

            <p className="mt-4 font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Za ostvarivanje svojih prava korisnik nam se može obratiti putem
              dostupnih kontakt kanala.
            </p>
          </section>

          {/* 9. Kolačići */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              9. Kolačići i tehnički podaci
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Naša internet stranica može koristiti kolačiće (cookies) i slične
              tehnologije radi pravilnog funkcionisanja stranice, unapređenja
              korisničkog iskustva, sigurnosti i analize korištenja stranice.
              Korisnik može upravljati postavkama kolačića putem svog internet
              preglednika ili dostupnih postavki na našoj internet stranici, u
              zavisnosti od vrste kolačića.
            </p>
          </section>

          {/* 10. Izmjene */}
          <section className="mb-10">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              10. Izmjene Politike privatnosti
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Zadržavamo pravo da povremeno izmijenimo ili dopunimo ovu Politiku
              privatnosti kako bismo je uskladili sa promjenama u našim
              uslugama, tehnologiji ili važećim propisima. Ažurirana verzija
              Politike privatnosti biće objavljena na ovoj internet stranici, uz
              navođenje datuma posljednje izmjene.
            </p>
          </section>

          {/* 11. Kontakt */}
          <section className="mb-2">
            <h2 className="mb-4 font-montserrat text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              11. Kontakt
            </h2>

            <p className="font-montserrat text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
              Ukoliko imate pitanja u vezi sa obradom i zaštitom vaših ličnih
              podataka, želite ostvariti neko od svojih prava ili su vam
              potrebne dodatne informacije, možete nam se obratiti putem
              dostupnih kontakt kanala.
            </p>

            <div className="mt-8 rounded-xl border border-emerald-100 bg-emerald-50 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20 md:p-6">
              <p className="font-montserrat text-base font-semibold leading-7 text-gray-900 dark:text-white md:text-lg">
                Vaša privatnost i sigurnost vaših podataka naš su prioritet.
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
