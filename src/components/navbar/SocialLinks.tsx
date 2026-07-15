import { socialLinks } from "@/data/navData";

interface SocialLinksProps {
  variant?: "desktop" | "mobile";
}

export default function SocialLinks({ variant = "desktop" }: SocialLinksProps) {
  const containerClass =
    variant === "mobile"
      ? "flex gap-6 px-4 pt-6 border-t border-white/10 mt-4 justify-center"
      : "hidden md:flex items-center space-x-5 text-gray-400";

  const iconSize = variant === "mobile" ? 28 : 24;

  return (
    <div className={containerClass}>
      {socialLinks.map(({ href, icon: Icon, label }) => {
        return (
          <a
            key={label}
            href={href}
            className="text-gray-400 hover:text-synth-primary transition-all duration-300 hover:-translate-y-1"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
