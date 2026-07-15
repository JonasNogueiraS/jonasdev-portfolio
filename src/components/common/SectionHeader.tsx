interface SectionHeaderProps {
  title: string;
  highlight?: string;
  highlightType?: "stroke" | "gradient";
  subtitle: string;
  gradientColor?: "primary" | "secondary";
  className?: string;
}

export default function SectionHeader({
  title,
  highlight,
  highlightType = "gradient",
  subtitle,
  gradientColor = "primary",
  className = "",
}: SectionHeaderProps) {
  const highlightClass =
    highlightType === "stroke"
      ? "text-stroke"
      : "text-transparent bg-clip-text bg-gradient-to-r from-synth-secondary to-synth-primary";

  const dividerClass =
    gradientColor === "primary"
      ? "from-transparent via-synth-primary to-transparent"
      : "from-transparent via-synth-secondary to-transparent";

  const subtitleClass =
    gradientColor === "primary"
      ? "text-synth-primary/60"
      : "text-synth-secondary/60";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 tracking-wider text-center">
        {title} {highlight && <span className={highlightClass}>{highlight}</span>}
      </h2>
      <div className={`h-1 w-32 bg-gradient-to-r ${dividerClass}`}></div>
      <p className={`mt-4 font-mono ${subtitleClass} text-sm tracking-widest uppercase text-center`}>
        {subtitle}
      </p>
    </div>
  );
}
