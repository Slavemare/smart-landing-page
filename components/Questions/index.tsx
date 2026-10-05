"use client";

import { Accordion, Title } from "rizzui";
import clsx from "clsx";
import { MdKeyboardArrowDown } from "react-icons/md";

const data = [
  {
    title: "Koje platne usluge nudite?",
    content: `
    Pružamo različite platne usluge, uključujući plaćanje računa, novčane transfere, međunarodne doznake i druge usluge u skladu sa važećim propisima.
    `,
  },
  {
    title:
      "Da li je za korištenje vaših usluga potreban identifikacioni dokument?",
    content: `
    Da. Za određene platne usluge potrebno je predočiti važeći identifikacioni dokument, u skladu sa zakonskim i regulatornim zahtjevima.
    `,
  },
  {
    title: "Da li mogu poslati novac u inostranstvo?",
    content: `
    Da. Omogućavamo slanje i prijem međunarodnih novčanih doznaka putem dostupnih partnerskih sistema, uz poštovanje propisanih procedura.
    `,
  },
  {
    title: "Koliko traje izvršenje platne transakcije?",
    content: `
   Transakcije prema bankama koje učestvuju u TIPS sistemu izvršavaju se gotovo trenutno, najčešće u roku od 10 sekundi. Za račune u bankama koje nisu dio TIPS sistema, vrijeme izvršenja može biti nešto duže i zavisi od platnog sistema i banke primaoca.
    `,
  },
  {
    title: "Kako mogu provjeriti status svoje transakcije?",
    content: `
    Status transakcije moguće je provjeriti putem dostupnih kanala za praćenje transakcija. Za dodatne informacije možete kontaktirati našu korisničku podršku.
    `,
  },
  {
    title: "Da li mogu izvršiti plaćanje putem vaših podagenata?",
    content: `
    Da. Naše usluge su dostupne i putem razvijene podagentske mreže, što omogućava jednostavniji pristup platnim uslugama na različitim lokacijama.
    `,
  },
  {
    title: "Kako su zaštićene moje transakcije?",
    content: `
    Sigurnost transakcija jedan je od osnovnih principa našeg poslovanja. Primjenjujemo odgovarajuće sigurnosne procedure, kontrole i savremena tehnološka rješenja radi zaštite korisnika i njihovih transakcija.
    `,
  },
  {
    title: "Gdje mogu dobiti dodatne informacije o vašim uslugama?",
    content: `
    Za dodatne informacije o uslugama, uslovima i procedurama možete nas kontaktirati putem dostupnih kontakt kanala. Naš tim će vam pružiti potrebne informacije i podršku.
    `,
  },
];

function Questions() {
  return (
    <div className="bg-gray-100 dark:bg-dark lg:pt-8 lg:pb-32">
      <div className="w-full">
        <Title className="text-black dark:text-white font-montserrat py-8 mt-8 text-center">
          Najčešća pitanja
        </Title>
      </div>
      <div className="w-[95%] border border-[#a3a2a2] lg:w-1/2 rounded mx-auto">
        {data.map((item, index) => (
          <Accordion
            key={item.title}
            defaultOpen={index === 0}
            className="mx-8 border-b last-of-type:border-b-0 font-montserrat w-full mx-auto text-black dark:text-white border-[#a3a2a2]"
          >
            <Accordion.Header>
              {(props: { open: boolean }) => (
                <div className="flex w-full cursor-pointer items-center justify-between py-5 px-5 text-base md:text-lg border-b font-bold">
                  <div className="w-[90%] text-left">{item.title}</div>
                  <MdKeyboardArrowDown
                    className={clsx(
                      "h-5 w-5 transform transition-transform duration-300",
                      props.open ? "rotate-0" : "-rotate-90"
                    )}
                  />
                </div>
              )}
            </Accordion.Header>
            <Accordion.Body className="mb-7 mt-4  px-5 ">
              {item.content}
            </Accordion.Body>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Questions;
