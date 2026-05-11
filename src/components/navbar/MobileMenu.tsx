import { FiMenu, FiX } from "react-icons/fi";
import type { NavLinkItem } from "./types";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  navLinks: NavLinkItem[];
}

export default function MobileMenu({
  isOpen,
  onToggle,
  navLinks,
}: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="text-gray-300 hover:text-white p-2 focus:outline-none z-50 relative"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FiX
            size={28}
            className="text-synth-primary"
          />
        ) : (
          <FiMenu size={28} />
        )}
      </button>
      <div
        className={`fixed inset-0 bg-gray-950/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ top: "0", paddingTop: "80px" }}
      >
        <div className="flex flex-col h-full px-6">
          <div className="flex flex-col space-y-2 mt-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                href={link.href}
                variant="mobile"
                onClick={onToggle}
              />
            ))}
          </div>

          {/* linha divisória */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
            <div className="pb-10">
                <p className="text-center font-mono text-sm text-gray-500 mb-4">
                    &lt;Entre em contato/&gt;
                </p>
                <SocialLinks variant="mobile"/>
            </div>
        </div>
      </div>
    </div>
  );
}
