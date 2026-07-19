import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import type { Project } from "@/services/curation";

interface ProjectCardProps {
  project: Project;
}

/** Formata "2026-03-04T..." em "mar. 2026". */
function formatUpdated(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", {
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isPrimary = project.accent === "primary";

  const accentClasses = isPrimary
    ? "hover:border-synth-primary/40 hover:shadow-[0_0_25px_rgba(255,0,255,0.15)]"
    : "hover:border-synth-secondary/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]";

  const tagClasses = isPrimary
    ? "text-synth-primary border-synth-primary/30"
    : "text-synth-secondary border-synth-secondary/30";

  return (
    <article
      className={`group relative flex flex-col h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${accentClasses}`}
    >
      <div className="relative overflow-hidden aspect-video">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <CoverPlaceholder project={project} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-synth-void via-synth-void/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col flex-grow p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-xl text-white tracking-wide">{project.title}</h3>
          {project.stars > 0 && (
            <span className="flex items-center gap-1 text-xs text-gray-400 font-mono shrink-0 pt-1">
              <FiStar size={12} /> {project.stars}
            </span>
          )}
        </div>

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

        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5 mt-auto">
          <div className="flex items-center gap-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-gray-300 hover:text-white transition-colors"
            >
              <FiGithub size={16} /> Código
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-gray-300 hover:text-white transition-colors"
              >
                <FiExternalLink size={16} /> Ver online
              </a>
            )}
          </div>
          {project.updatedAt && (
            <span className="font-mono text-[11px] text-gray-600">
              {formatUpdated(project.updatedAt)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

/** Capa gerada quando o projeto não tem imagem: inicial + linguagem. */
function CoverPlaceholder({ project }: { project: Project }) {
  const isPrimary = project.accent === "primary";
  const glow = isPrimary ? "from-synth-primary/25" : "from-synth-secondary/25";
  const text = isPrimary ? "text-synth-primary" : "text-synth-secondary";

  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${glow} to-synth-midnight relative`}
    >
      <div className="absolute inset-0 bg-synth-grid bg-[size:32px_32px] opacity-20" />
      <span className={`font-display text-5xl font-bold ${text} drop-shadow-[0_0_15px_currentColor] relative`}>
        {project.title.charAt(0).toUpperCase()}
      </span>
      {project.language && (
        <span className="absolute bottom-3 right-3 font-mono text-[11px] text-gray-400">
          {project.language}
        </span>
      )}
    </div>
  );
}
