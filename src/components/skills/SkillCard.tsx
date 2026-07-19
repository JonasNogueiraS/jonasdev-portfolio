import type { SkillItem } from "@/data/skillsData";

interface SkillCardProps {
  skill: SkillItem;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <div
      className="group relative flex w-40 shrink-0 flex-col items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] px-6 py-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{ ["--skill-color" as string]: skill.color }}
    >
      <Icon
        className="h-12 w-12 text-white/70 transition-all duration-300 group-hover:scale-110"
        style={{ color: "var(--skill-color)" }}
        aria-hidden
      />
      <span className="font-mono text-sm tracking-wide text-gray-300 transition-colors group-hover:text-white">
        {skill.name}
      </span>
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ backgroundColor: "var(--skill-color)" }}
        aria-hidden
      />
    </div>
  );
}
