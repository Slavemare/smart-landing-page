"use client";

import React, { useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { FaCheck } from "react-icons/fa";
import { Button } from "rizzui";

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
                title="Postanite dio naše podagentske mreže"
                paragraph="Proširite svoju ponudu i omogućite korisnicima pristup pouzdanim platnim uslugama kroz saradnju sa našom platnom institucijom. Jednostavan model saradnje, podrška i savremena rješenja omogućavaju vam da razvijate svoje poslovanje."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Nove usluge za vaše korisnike" />
                    <List text="Sigurna obrada transakcija" />
                    <List text="Savremena tehnologija" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Podrška korisnicima 24/7" />
                    <List text="Edukacija za partnere" />
                    <List text="Pouzdano partnersko okruženje" />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start justify-start mt-6">
                <Button
                  onClick={() => {
                    const target = document.getElementById("contact");

                    if (!target) return;

                    const startPosition = window.scrollY;
                    const targetPosition =
                      target.getBoundingClientRect().top + window.scrollY;

                    const distance = targetPosition - startPosition;
                    const duration = 1500;
                    let startTime: number | null = null;

                    const animation = (currentTime: number) => {
                      if (startTime === null) startTime = currentTime;

                      const elapsed = currentTime - startTime;
                      const progress = Math.min(elapsed / duration, 1);

                      const easeInOut =
                        progress < 0.5
                          ? 2 * progress * progress
                          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

                      window.scrollTo(0, startPosition + distance * easeInOut);

                      if (progress < 1) {
                        requestAnimationFrame(animation);
                      }
                    };

                    requestAnimationFrame(animation);
                  }}
                  className="bg-emerald-600 rounded border border-transparent pt-6 pr-8 pb-6 pl-6 flex flex-row gap-2 items-center justify-center w-full sm:w-[250px] h-[52px] text-neutral-50 font-montserrat text-lg sm:text-base uppercase leading-normal font-semibold hover:bg-emerald-700 transition shadow-lg mb-8 lg:mb-0"
                >
                  Kontaktirajte nas
                </Button>
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
