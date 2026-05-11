export interface SkillItem {
  name: string;
  level: number;
  color: string;
}

export const skillsData: SkillItem[] = [
  { name: "React.js", level: 90, color: "bg-cyan-400" },
  { name: "TypeScript", level: 85, color: "bg-blue-500" },
  { name: "JavaScript", level: 95, color: "bg-yellow-400" },
  { name: "Tailwind CSS", level: 90, color: "bg-teal-400" },
  { name: "React Native", level: 85, color: "bg-indigo-400" },
  { name: "Flutter", level: 80, color: "bg-sky-400" },
  { name: "Git & Version Control", level: 85, color: "bg-red-500" },
];
