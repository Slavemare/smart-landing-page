import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

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
        pageName="Prikaz naših usluga"
        description="Nudimo sigurne i pouzdane platne usluge prilagođene potrebama građana i poslovnih korisnika. Ukoliko ne pronađete uslugu koja vam je potrebna, slobodno nas kontaktirajte – naš tim će vam rado pružiti dodatne informacije."
      />

      <Features />
    </>
  );
};

export default ContactPage;
