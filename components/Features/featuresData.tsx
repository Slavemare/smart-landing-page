import { Feature } from "@/types/feature";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineCash } from "react-icons/hi";
import { MdOutlinePayment, MdSupportAgent } from "react-icons/md";
import { TbDeviceDesktopAnalytics, TbWorldCheck } from "react-icons/tb";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <MdOutlinePayment className="text-white text-4xl" />,
    title: "Brza plaćanja",
    paragraph: "Plaćajte i prenosite sredstva brzo, jednostavno i sigurno.",
  },
  {
    id: 2,
    icon: <AiOutlineSafety className="text-white text-4xl" />,
    title: "Pouzdane transakcije",
    paragraph: "Svaka transakcija uz sigurnost i potpunu kontrolu.",
  },
  {
    id: 3,
    icon: <TbDeviceDesktopAnalytics className="text-white text-4xl" />,
    title: "Analitika transakcija",
    paragraph: "Pregled i praćenje transakcije uz jasne i pregledne podatke.",
  },
  {
    id: 4,
    icon: <MdSupportAgent className="text-white text-4xl" />,
    title: "Podrška 24/7",
    paragraph:
      "Naš tim vam je dostupan 24 sata dnevno, 7 dana u sedmici za sva pitanja i podršku.",
  },
  {
    id: 5,
    icon: <TbWorldCheck className="text-white text-4xl" />,
    title: "Međunarodne doznake",
    paragraph:
      "Šaljite i primajte novac brzo i pouzdano putem provjerenih partnera.",
  },
  {
    id: 6,
    icon: <HiOutlineCash className="text-white text-4xl" />,

    title: "Savremena finansijska rješenja",
    paragraph: "Usluge prilagođene potrebama građana i poslovnih korisnika.",
  },
];
export default featuresData;
