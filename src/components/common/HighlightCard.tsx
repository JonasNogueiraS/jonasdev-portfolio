import type { ElementType } from "react";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: ElementType;
  color?: "primary" | "secondary";
  className?: string;
}

export default function HighlightCard({
  title,
  description,
  icon: Icon,
  color = "primary",
  className = "",
}: HighlightCardProps) {
  const colorClasses =
    color === "primary"
      ? "text-synth-primary hover:border-synth-primary/30"
      : "text-synth-secondary hover:border-synth-secondary/30";

  const iconClasses = color === "primary" ? "text-synth-primary" : "text-synth-secondary";

  return (
    <div
      className={`p-4 bg-white/5 border border-white/5 rounded-xl transition-colors group ${colorClasses} ${className}`}
    >
      <Icon className={`mb-3 group-hover:scale-110 transition-transform text-2xl ${iconClasses}`} />
      <h4 className="font-display text-sm text-white">{title}</h4>
      <p className="text-xs text-gray-400 mt-1">{description}</p>
    </div>
  );
}
