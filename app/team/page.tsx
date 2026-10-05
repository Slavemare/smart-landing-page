import AboutSectionTwo from "@/components/About/AboutSectionTwo";
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
        pageName="Stručnost koja nas pokreće"
        description="Iza svake sigurne i pouzdane finansijske usluge stoji tim stručnjaka koji objedinjuje iskustvo bankara, pravnu ekspertizu i savremena tehnološka znanja. Zajedničkim radom gradimo stabilna, sigurna i moderna rješenja koja odgovaraju potrebama naših korisnika."
      />

      <AboutSectionTwo />
    </>
  );
};

export default ContactPage;
