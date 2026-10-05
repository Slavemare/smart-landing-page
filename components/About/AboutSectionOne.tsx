"use client";

import React, { useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { FaCheck } from "react-icons/fa";

const checkIcon = <FaCheck />;

const AboutSectionOne = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let anim: any = null;
    let cancelled = false;

    const loadAnimation = async () => {
      if (!container.current) return;

      const lottie = require("lottie-web");

      const response = await fetch("/exchange.json");
      const animationData = await response.json();

      if (cancelled || !container.current) return;

      container.current.innerHTML = "";

      anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: false,
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

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-sm bg-emerald-500 bg-opacity-10 text-white p-2">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Pouzdana platna rješenja za savremene potrebe"
                paragraph="Gradimo usluge na sigurnosti, dostupnosti i tehnologiji kako bismo korisnicima omogućili jednostavno i pouzdano upravljanje finansijskim transakcijama."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Sigurne finansijske transakcije" />
                    <List text="Brza obrada plaćanja" />
                    <List text="Transparentno poslovanje" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Napredna analitika transakcija" />
                    <List text="Razvijena podagentska mreža" />
                    <List text="Podrška korisnicima 24/7" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div
                  ref={container}
                  className="w-full h-[350px] md:h-[500px] border border-gray-200 dark:border-gray-600 border-opacity-10 p-8 lg:p-10 rounded-xl  bg-gray-100 dark:bg-dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
