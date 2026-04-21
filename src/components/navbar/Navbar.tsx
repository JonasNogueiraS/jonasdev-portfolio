import Logo from "./Logo";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";
import { type NavbarProps, type NavLinkItem } from "./types";
import { useState } from "react";

const navItems: NavLinkItem[] = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Projetos", href: "#projects" },
];

const SCROLL_THRESHOLD = 20;

export default function Navbar({
  logo = "jonas.dev",
  className = "",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b 
            ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8 ">
          {navItems.map((item) => (
            <NavLink key={item.name} name={item.name} href={item.href} />
          ))}
        </div>

        <SocialLinks variant="desktop" />

        <MobileMenu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          navLinks={navItems}
        />
      </div>
    </nav>
  );
}
