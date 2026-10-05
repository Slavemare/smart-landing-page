import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartCash doo - Platna institucija",
  description: "Vaš partner za moderna platna rješenja",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      <Features />
      <Brands />
      <AboutSectionOne />
      <Testimonials />
      <AboutSectionTwo />
      <Questions />
      <Contact />
    </>
  );
}
