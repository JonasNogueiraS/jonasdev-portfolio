import SkillCard from "./SkillCard";
import { skillsData } from "@/data/skillsData";

/**
 * Carrossel de rolagem automática e infinita.
 * A lista é duplicada e o trilho anda -50%, criando um loop sem emenda
 * Pausa ao passar o mouse e respeita prefers-reduced-motion
 */
export default function SkillsMarquee() {
  const loop = [...skillsData, ...skillsData];

  return (
    <div
      className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Tecnologias e ferramentas"
    >
      <ul className="flex w-max gap-6 py-4 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((skill, index) => (
          <li key={`${skill.name}-${index}`} aria-hidden={index >= skillsData.length}>
            <SkillCard skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}
