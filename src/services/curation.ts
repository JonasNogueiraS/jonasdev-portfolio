import type { GithubRepo } from "./github";
import { defaultCuration } from "@/data/curationDefaults";

/** Overrides que controlam como (e se) um projeto aparece no portfólio. */
export interface RepoCuration {
  featured: boolean;
  hidden: boolean;
  /** Posição entre os destacados (menor = primeiro). */
  order: number;
  title?: string;
  description?: string;
  image?: string;
  /** Substituem as linguagens/topics do GitHub. */
  tags?: string[];
  liveUrl?: string;
  accent?: "primary" | "secondary";
}

/** Mapa de curadoria indexado pelo nome do repositório. */
export type CurationMap = Record<string, RepoCuration>;

const STORAGE_KEY = "jonasdev.curation.v1";

export function emptyCuration(order = 0): RepoCuration {
  return { featured: false, hidden: false, order };
}


export function loadCuration(): CurationMap {
  if (typeof localStorage === "undefined") return { ...defaultCuration };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultCuration };
    const parsed = JSON.parse(raw) as CurationMap;
    return { ...defaultCuration, ...parsed };
  } catch {
    return { ...defaultCuration };
  }
}

export function saveCuration(map: CurationMap): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}

export function resetCuration(): CurationMap {
  if (typeof localStorage !== "undefined") localStorage.removeItem(STORAGE_KEY);
  return { ...defaultCuration };
}

/** Serializa a curadoria atual para o usuário salvar/commitar em curationDefaults.ts. */
export function exportCuration(map: CurationMap): string {
  return JSON.stringify(map, null, 2);
}

export function importCuration(json: string): CurationMap {
  const parsed = JSON.parse(json) as CurationMap;
  if (typeof parsed !== "object" || parsed === null) {
    throw new Error("JSON inválido: esperado um objeto de curadoria.");
  }
  return parsed;
}

/** Card final consumido pela UI, já com overrides aplicados. */
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  language: string | null;
  stars: number;
  updatedAt: string;
  accent: "primary" | "secondary";
}

const FALLBACK_DESCRIPTION =
  "Projeto pessoal — em breve mais detalhes. Confira o código no GitHub.";

/** Aplica a curadoria sobre um repositório e devolve o card final. */
export function mergeRepo(repo: GithubRepo, curation: RepoCuration): Project {
  const tags =
    curation.tags && curation.tags.length > 0
      ? curation.tags
      : dedupe([repo.language, ...repo.topics].filter(Boolean) as string[]).slice(0, 4);

  return {
    id: repo.name,
    title: curation.title?.trim() || repo.displayName,
    description: curation.description?.trim() || repo.description || FALLBACK_DESCRIPTION,
    image: curation.image?.trim() || undefined,
    tags,
    repoUrl: repo.htmlUrl,
    liveUrl: curation.liveUrl?.trim() || repo.homepage || undefined,
    language: repo.language,
    stars: repo.stars,
    updatedAt: repo.updatedAt,
    accent: curation.accent ?? "secondary",
  };
}

function dedupe(items: string[]): string[] {
  return Array.from(new Set(items));
}

/**
 * Constrói a lista de projetos destacados: só os `featured`, não ocultos,
 * ordenados por `order`.
 */
export function buildFeaturedProjects(
  repos: GithubRepo[],
  curation: CurationMap
): Project[] {
  return repos
    .filter((repo) => {
      const c = curation[repo.name];
      return c?.featured && !c.hidden;
    })
    .sort((a, b) => (curation[a.name].order ?? 0) - (curation[b.name].order ?? 0))
    .map((repo) => mergeRepo(repo, curation[repo.name]));
}
