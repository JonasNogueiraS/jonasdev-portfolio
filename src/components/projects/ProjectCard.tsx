import type { ProjectItem } from "@/data/projectsData";
import { getProjectLinks } from "@/data/projectsData";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const links = getProjectLinks(project);

  const accentClasses =
    project.accent === "primary"
      ? "hover:border-synth-primary/40 hover:shadow-[0_0_25px_rgba(255,0,255,0.15)]"
      : "hover:border-synth-secondary/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]";

  const tagClasses =
    project.accent === "primary"
      ? "text-synth-primary border-synth-primary/30"
      : "text-synth-secondary border-synth-secondary/30";

  return (
    <article
      className={`group relative flex flex-col h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${accentClasses}`}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-synth-void via-synth-void/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col flex-grow p-6">
        <h3 className="font-display text-xl text-white mb-2 tracking-wide">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`font-mono text-xs px-2 py-1 rounded-md border bg-white/5 ${tagClasses}`}
            >
              {tag}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
