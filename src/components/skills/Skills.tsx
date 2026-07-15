import SkillBar from "./SkillBar";
import SectionHeader from "@/components/common/SectionHeader";
import { skillsData } from "@/data/skillsData";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {skillsData.map((skill) =>
            <SkillBar key={skill.name} skill={skill}/>
          )}
        </div>
      </div>
    </section>
  );
}
