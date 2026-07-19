import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiStar, FiArrowUp, FiArrowDown, FiExternalLink } from "react-icons/fi";
import type { GithubRepo } from "@/services/github";
import type { RepoCuration } from "@/services/curation";

interface AdminRepoCardProps {
  repo: GithubRepo;
  curation: RepoCuration;
  onPatch: (changes: Partial<RepoCuration>) => void;
  onMove: (dir: -1 | 1) => void;
}

export default function AdminRepoCard({ repo, curation, onPatch, onMove }: AdminRepoCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={`rounded-xl border transition-colors ${
        curation.featured
          ? "border-synth-secondary/40 bg-synth-secondary/[0.04]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      {/* Cabeçalho da linha */}
      <div className="flex items-center gap-4 p-4">
        {/* Toggle destaque */}
        <button
          onClick={() => onPatch({ featured: !curation.featured })}
          aria-pressed={curation.featured}
          title={curation.featured ? "Remover dos destaques" : "Destacar no portfólio"}
          className={`shrink-0 w-11 h-6 rounded-full relative transition-colors ${
            curation.featured ? "bg-synth-secondary" : "bg-white/15"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-synth-void transition-transform ${
              curation.featured ? "translate-x-5" : ""
            }`}
          />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-mono text-sm text-white truncate">{repo.name}</h3>
            {repo.isFork && (
              <span className="text-[10px] font-mono text-gray-500 border border-white/10 rounded px-1">
                fork
              </span>
            )}
            {repo.stars > 0 && (
              <span className="flex items-center gap-1 text-[11px] text-gray-500">
                <FiStar size={11} /> {repo.stars}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 truncate">
            {curation.title || repo.displayName}
            {repo.language ? ` · ${repo.language}` : ""}
          </p>
        </div>

        {curation.featured && (
          <div className="flex items-center gap-1 shrink-0">
            <IconBtn onClick={() => onMove(-1)} title="Subir">
              <FiArrowUp size={15} />
            </IconBtn>
            <IconBtn onClick={() => onMove(1)} title="Descer">
              <FiArrowDown size={15} />
            </IconBtn>
          </div>
        )}

        <IconBtn onClick={() => setExpanded((v) => !v)} title="Editar detalhes">
          {expanded ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
        </IconBtn>
      </div>

      {/* Editor expandido */}
      {expanded && (
        <div className="border-t border-white/10 p-4 grid gap-4 sm:grid-cols-2">
          <Field label="Título (override)">
            <input
              value={curation.title ?? ""}
              onChange={(e) => onPatch({ title: e.target.value })}
              placeholder={repo.displayName}
              className={inputClass}
            />
          </Field>

          <Field label="URL do projeto no ar">
            <input
              value={curation.liveUrl ?? ""}
              onChange={(e) => onPatch({ liveUrl: e.target.value })}
              placeholder={repo.homepage ?? "https://..."}
              className={inputClass}
            />
          </Field>

          <Field label="Descrição (override)" className="sm:col-span-2">
            <textarea
              value={curation.description ?? ""}
              onChange={(e) => onPatch({ description: e.target.value })}
              placeholder={repo.description ?? "Descreva o projeto..."}
              rows={2}
              className={`${inputClass} resize-y`}
            />
          </Field>

          <Field label="Imagem de capa (URL)">
            <input
              value={curation.image ?? ""}
              onChange={(e) => onPatch({ image: e.target.value })}
              placeholder="https://.../capa.png"
              className={inputClass}
            />
          </Field>

          <Field label="Tags (separadas por vírgula)">
            <input
              value={(curation.tags ?? []).join(", ")}
              onChange={(e) =>
                onPatch({
                  tags: e.target.value
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean),
                })
              }
              placeholder={[repo.language, ...repo.topics].filter(Boolean).join(", ")}
              className={inputClass}
            />
          </Field>

          <Field label="Cor de acento">
            <select
              value={curation.accent ?? "secondary"}
              onChange={(e) => onPatch({ accent: e.target.value as "primary" | "secondary" })}
              className={inputClass}
            >
              <option value="secondary">Ciano</option>
              <option value="primary">Magenta</option>
            </select>
          </Field>

          <div className="flex items-end gap-4">
            <label className="flex items-center gap-2 text-xs font-mono text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={curation.hidden}
                onChange={(e) => onPatch({ hidden: e.target.checked })}
                className="accent-synth-primary"
              />
              Ocultar repositório
            </label>
            <a
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono text-gray-500 hover:text-synth-secondary transition-colors"
            >
              <FiExternalLink size={13} /> GitHub
            </a>
          </div>
        </div>
      )}
    </article>
  );
}

const inputClass =
  "w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 font-mono text-sm text-white focus:border-synth-secondary focus:outline-none";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[11px] uppercase tracking-wider text-gray-500 font-mono mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

function IconBtn({
  onClick,
  title,
  children,
}: {
  onClick: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="shrink-0 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
    >
      {children}
    </button>
  );
}
