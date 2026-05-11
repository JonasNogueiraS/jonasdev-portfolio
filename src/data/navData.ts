import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface NavLinkItem {
  name: string;
  href: string;
}

export interface SocialLinkItem {
  href: string;
  icon: IconType;
  label: string;
}

export const navItems: NavLinkItem[] = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
];

export const socialLinks: SocialLinkItem[] = [
  {
    href: "https://github.com/JonasNogueiraS",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/jonas-nogueira01",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/jonas_nogueira_",
    icon: FaInstagram,
    label: "Instagram",
  },
];
