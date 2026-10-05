import Breadcrumb from "@/components/Common/Breadcrumb";
import Questions from "@/components/Questions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartCash doo - platna institucija",
  description: "Vaš partner za moderna platna rješenja",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pitanja i odgovori"
        description="Pronađite odgovore na najčešća pitanja o našim uslugama, plaćanjima, transakcijama i procedurama."
      />

      <Questions />
    </>
  );
};

export default ContactPage;
