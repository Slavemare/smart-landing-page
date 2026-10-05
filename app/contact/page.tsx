import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

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
        pageName="Kontakt"
        description="Za sva pitanja, dodatne informacije i podršku u vezi sa našim uslugama, stojimo vam na raspolaganju. Kontaktirajte nas i rado ćemo vam pomoći."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
