import SkillsMarquee from "./SkillsMarquee";
import SectionHeader from "@/components/common/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="TECH"
          highlight="STACK"
          subtitle="// Skills_&_Abilities"
          gradientColor="secondary"
          className="mb-20"
        />
        <SkillsMarquee />
      </div>
    </section>
  );
}
