import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import type { SocialLinkItem } from "./types";

interface SocialLinksProps {
  variant?: "desktop" | "mobile";
}

const socialLinks: SocialLinkItem[] = [
  {
    href: "https://github.com/JonasNogueiraS",
    icon: GithubLogoIcon,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/jonas-nogueira01",
    icon: LinkedinLogoIcon,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/jonas_nogueira_",
    icon: InstagramLogoIcon,
    label: "Instagram",
  },
];

export default function SocialLinks({ variant = "desktop" }: SocialLinksProps) {
  const containerClass =
    variant === "mobile"
      ? "flex gap-6 px-4 pt-6 border-t border-white/10 mt-4 justify-center"
      : "hidden md:flex items-center space-x-5 text-gray-400";

  const iconSize = variant === "mobile" ? 28 : 24;

  return (
    <div className={containerClass}>
      {socialLinks.map(({ href, icon: Icon, label }) => {
        const weight = Icon === InstagramLogoIcon ? "bold" : "fill";
        return (
          <a
            key={label}
            href={href}
            className="hover:text-synth-primary transition-all duration-300 hover:-translate-y-1 text-gray-400 hover:text-white"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={iconSize} weight={weight} />
          </a>
        );
      })}
    </div>
  );
}
