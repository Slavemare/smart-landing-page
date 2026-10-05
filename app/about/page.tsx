import Brands from "@/components/Brands";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartCash doo - platna institucija",
  description: "Vaš partner za moderna platna rješenja",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Stručnost koja gradi povjerenje"
        description="Mi smo spoj stručnih ljudi, savremene tehnologije i posvećenosti korisnicima, sa ciljem da finansijske usluge učinimo sigurnijim, jednostavnijim i dostupnijim."
      />
      <Brands />
    </>
  );
};

export default AboutPage;
