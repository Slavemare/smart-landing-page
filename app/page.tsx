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
  metadataBase: new URL("https://smart-landing-page-five.vercel.app/"),

  title: "Smart Landing Page",
  description: "....",

  openGraph: {
    title: "Smart Landing Page",
    description: "....",
    siteName: "Smart Landing Page",
    images: [
      {
        url: "/images/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Smart Landing Page",
      },
    ],
    locale: "bs_BA",
    type: "website",
  },
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
