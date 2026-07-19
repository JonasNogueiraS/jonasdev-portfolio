import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";
import { navItems } from "@/data/navData";
import { useActiveSection } from "@/hooks/useActiveSection";

export interface NavbarProps {
  className?: string;
}

export default function Navbar({
  className = "",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const activeId = useActiveSection(
    navItems.map((item) => item.href.replace("#", ""))
  );
  const activeHref = `#${activeId}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10 bg-synth-void/70
            ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-8 ">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              name={item.name}
              href={item.href}
              isActive={item.href === activeHref}
            />
          ))}
        </div>

        <SocialLinks variant="desktop" />

        <MobileMenu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          navLinks={navItems}
          activeHref={activeHref}
        />
      </div>
    </nav>
  );
}
