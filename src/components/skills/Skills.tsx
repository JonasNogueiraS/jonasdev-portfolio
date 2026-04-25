import SkillBar from "./SkillBar";
import SkillHeader from "./SkillHeader";
import type { SkillItem } from "./types";

const skillsData: SkillItem[] = [
  { name: "React.js", level: 90, color: "bg-cyan-400" },
  { name: "TypeScript", level: 85, color: "bg-blue-500" },
  { name: "JavaScript", level: 95, color: "bg-yellow-400" },
  { name: "Tailwind CSS", level: 90, color: "bg-teal-400" },
  { name: "React Native", level: 85, color: "bg-indigo-400" },
  { name: "Flutter", level: 80, color: "bg-sky-400" },
  { name: "Git & Version Control", level: 85, color: "bg-red-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <SkillHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {skillsData.map((skill) =>
            <SkillBar key={skill.name} skill={skill}/>
          )}
        </div>
      </div>
    </section>
  );
}
