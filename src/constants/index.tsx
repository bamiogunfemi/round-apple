import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinFill, RiFacebookFill } from "react-icons/ri";
import {
  AiOutlineGlobal,
  AiOutlineShop,
  AiOutlineCalendar,
} from "react-icons/ai";
import { RiDashboardLine, RiPencilLine, RiWallet2Line } from "react-icons/ri";
import { MdPeopleOutline, MdCreditCard } from "react-icons/md";

export const whiteColor = "#FFF";
export const pickerColors = [
  "#242429",
  "#007AFF",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
];

export const socialLinks = [
  {
    icon: <AiOutlineInstagram size={16} fill="white" />,
    link: "www.ig.com",
  },
  {
    icon: <AiOutlineTwitter size={16} fill="white" />,
    link: "www.twitter.com",
  },
  {
    icon: <RiLinkedinFill size={16} fill="white" />,
    link: "www.linkedin.com",
  },
  {
    icon: <RiFacebookFill size={16} fill="white" />,
    link: "www.facebook.com",
  },
];
export const interests = ["Branding", "Entertainment", "Design"];

export const userName = "Blessing Daniels";
export const userImage = "https://via.placeholder.com/600/92c952";
export const userLink = "mainstack.me/blessingdaniels";

export const sidebarNavigationBarItems = [
  {
    id: "get-started",
    title: "Get Started",
    href: "/get-started",
    icon: <AiOutlineGlobal />,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/dahsboard",
    icon: <RiDashboardLine />,
  },
  {
    id: "editor",
    title: "Editor",
    href: "/editor",
    icon: <RiPencilLine />,
  },
  {
    id: "tribe",
    title: "Tribe",
    href: "/tribe",
    icon: <MdPeopleOutline />,
  },
  {
    id: "payment",
    title: "Payments",
    links: [
      { label: "Balance", href: "/balance", icon: <RiWallet2Line /> },
      { label: "Virtual Card", href: "/virtual-card", icon: <MdCreditCard /> },
    ],
  },
  {
    id: "business-tools",
    title: "business tools",
    links: [
      { label: "Digital shop", href: "/digital-shop", icon: <AiOutlineShop /> },
      {
        label: "Masterclass",
        href: "/masterclass",
        icon: <AiOutlineCalendar />,
      },
      { label: "Launchpad", href: "/launchpad", icon: <AiOutlineCalendar /> },
    ],
  },
];
