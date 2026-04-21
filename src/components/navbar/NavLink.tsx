interface NavLinkProps {
  name: string;
  href: string;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}

export default function NavLink({
  name,
  href,
  onClick,
  variant,
}: NavLinkProps) {

  
  if (variant === "mobile") {
    return (
      <a
        href={href}
        onClick={onClick}
        className="block font-mono text-gray-300 hover:text-synth-secondary hover:bg-white/5 px-4 py-3 rounded-md text-lg transition-colors border-l-2 border-transparent hover:border-synth-primary"
      >
        &lt;{name}/&gt;
      </a>
    );
  }
  return (
    <a href={href} className="relative group px-2 py-1">
      <span className="relative z-10 font-mono text-base text-gray-300 group-hover:text-white transition-colors duration-300">
        &lt;{name}/&gt;
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-synth-secondary trnasition-all duration-300 group-hover:w-full shadow-[0_0_8px_theme(colors.synth.secondary)]" />
    </a>
  );
}
