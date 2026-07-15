import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary";
  glowPosition?: "default" | "none";
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "primary",
  glowPosition = "default",
}: GlassCardProps) {
  const glowClass = glowColor === "primary" ? "bg-synth-primary/20" : "bg-synth-secondary/20";

  return (
    <div
      className={`relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-colors ${className}`}
    >
      {glowPosition === "default" && (
        <>
          <div className={`absolute -top-4 -right-4 w-20 h-20 blur-xl rounded-full pointer-events-none ${glowClass}`}></div>
          <div className={`absolute -bottom-4 -left-4 w-20 h-20 blur-xl rounded-full pointer-events-none ${glowClass}`}></div>
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
