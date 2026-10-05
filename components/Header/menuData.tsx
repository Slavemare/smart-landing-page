import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Početna",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "O nama",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Kontakt",
    path: "/contact",
    newTab: false,
  },
  {
    id: 3,
    title: "Podrška",
    path: "/support",
    newTab: false,
  },
  {
    id: 4,
    title: "Još",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Naše usluge",
        path: "/services",
        newTab: false,
      },
      {
        id: 42,
        title: "Naš tim",
        path: "/team",
        newTab: false,
      },
      {
        id: 48,
        title: "Najčešća pitanja",
        path: "/questions",
        newTab: false,
      },
    ],
  },
];
export default menuData;
