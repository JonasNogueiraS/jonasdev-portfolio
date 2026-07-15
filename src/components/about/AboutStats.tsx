import type { AboutStatItem } from "@/data/aboutData";
import GlassCard from "@/components/common/GlassCard";

interface AboutStatsProps {
  stats: AboutStatItem[];
}

export default function AboutStats({ stats }: AboutStatsProps) {
  return (
    <div className="w-full md:w-5/12">
      <GlassCard>
        <div className="space-y-6 font-mono">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
            >
              <span className="text-gray-400 flex items-center gap-2 shrink-0">
                <stat.icon size={16} />
                <span className="capitalize">{stat.label}</span>
              </span>
              <span
                className={`text-sm sm:text-base text-right ${
                  stat.highlight ? "text-synth-secondary" : "text-white"
                }`}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}