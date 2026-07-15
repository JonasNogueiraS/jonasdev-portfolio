interface NavLinkProps {
  name: string;
  href: string;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
  isActive?: boolean;
}

export default function NavLink({
  name,
  href,
  onClick,
  variant,
  isActive = false,
}: NavLinkProps) {

  if (variant === "mobile") {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-current={isActive ? "true" : undefined}
        className={`block font-mono px-4 py-3 rounded-md text-lg transition-colors border-l-2 ${
          isActive
            ? "text-synth-secondary bg-white/5 border-synth-primary"
            : "text-gray-300 border-transparent hover:text-synth-secondary hover:bg-white/5 hover:border-synth-primary"
        }`}
      >
        &lt;{name}/&gt;
      </a>
    );
  }
  return (
    <a
      href={href}
      aria-current={isActive ? "true" : undefined}
      className="relative group px-2 py-1"
    >
      <span
        className={`relative z-10 font-mono text-base transition-colors duration-300 ${
          isActive ? "text-white" : "text-gray-300 group-hover:text-white"
        }`}
      >
        &lt;{name}/&gt;
      </span>
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-synth-secondary transition-all duration-300 shadow-[0_0_8px_theme(colors.synth.secondary)] ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}
