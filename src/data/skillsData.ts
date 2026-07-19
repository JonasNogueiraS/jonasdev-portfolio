import type { IconType } from "react-icons";
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiGit,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon: IconType;
  /** Cor de marca usada no ícone e no brilho neon */
  color: string;
}

export const skillsData: SkillItem[] = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];
