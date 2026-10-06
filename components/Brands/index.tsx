"use client";

import React, { useEffect, useRef } from "react";
import { Text, Title } from "rizzui";

function Brands() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let anim: any = null;
    let cancelled = false;

    const loadAnimation = async () => {
      if (!container.current) return;

      const lottie = require("lottie-web");

      const response = await fetch("/dashboard.json");
      const animationData = await response.json();

      // Ako je komponenta već unmountovana
      if (cancelled || !container.current) return;

      // Očisti container prije učitavanja animacije
      container.current.innerHTML = "";

      anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    };

    loadAnimation();

    return () => {
      cancelled = true;

      if (anim) {
        anim.destroy();
        anim = null;
      }

      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full mx-auto items-center justify-center shrink-0 relative font-montserrat px-4 md:px-0 2xl:w-full">
      <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 rounded-3xl border-solid border-emerald-600 border flex flex-row gap-1 items-center justify-start shrink-0 relative px-8 py-2">
          <span className="text-lg mr-1">🔥</span>

          <div className="text-white text-center font-montserrat text-base leading-normal font-semibold uppercase relative pr-2">
            O nama
          </div>
        </div>

        <div className="text-black dark:text-white text-center font-montserrat text-2xl md:text-4xl leading-[120%] font-semibold relative mb-16 mt-4">
          Tehnologija, sigurnost i pouzdanost na jednom mjestu
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto">
        <div className="w-full relative mx-auto">
          <div className="bg-gray-50 dark:bg-dark rounded border-solid border-[rgba(0,0,0,0.06)] border w-full md:w-5/6 xl:w-4/6 mx-auto flex flex-col lg:flex-row items-start justify-center">
            <div
              className="container w-[70%] md:h-[600px] lg:w-1/2 md:rounded-tr-xl md:rounded-br-xl p-0 md:p-4 lg:p-20 mx-auto"
              ref={container}
            />

            <div className="lg:w-1/2 px-4 py-4 lg:pr-4 lg:py-8 lg:px-0">
              <Title className="text-black pb-8 dark:text-white">
                Sigurnost i pouzdanost u svakom plaćanju
              </Title>

              <Text className="text-black dark:text-white">
                Mi smo savremena platna institucija posvećena pružanju sigurnih,
                brzih i pouzdanih platnih usluga građanima i poslovnim
                korisnicima. Kombinujemo finansijsko iskustvo, savremenu
                tehnologiju i profesionalan pristup kako bismo finansijske
                transakcije učinili jednostavnim i efikasnim.
                <br />
                <br />
                Naše usluge obuhvataju plaćanja, novčane transfere i međunarodne
                doznake, uz poseban fokus na sigurnost, transparentnost i
                dostupnost. Savremena infrastruktura omogućava pouzdano
                upravljanje transakcijama i kvalitetnu analitiku finansijskih
                aktivnosti.
                <br />
                <br />
                Posebnu pažnju posvećujemo sigurnosti i usklađenosti poslovanja
                sa važećim propisima. Naši procesi su dizajnirani kako bi
                omogućili pouzdano izvršavanje transakcija, preglednost
                poslovanja i zaštitu korisnika.
                <br />
                <br />
                Kroz razvijenu podagentsku mrežu naše usluge činimo dostupnijim
                na različitim lokacijama, dok sigurnost, usklađenost sa
                propisima i kvalitetna podrška ostaju temelj našeg poslovanja.
                <br />
                <br />
                Gradimo dugoročna partnerstva zasnovana na povjerenju, kvalitetu
                usluge i sigurnosti svakog pojedinačnog plaćanja
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
