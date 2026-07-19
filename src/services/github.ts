import { siteConfig } from "@/config/site";

/** Repositório normalizado a partir da resposta da API do GitHub. */
export interface GithubRepo {
  id: number;
  name: string;
  /** Nome legível derivado do slug do repositório */
  displayName: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stars: number;
  forks: number;
  updatedAt: string;
  isFork: boolean;
  isArchived: boolean;
}

/** estrutura parcial da resposta da API do GitHub */
interface GithubApiRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

/** transforma "algum-projeto_legal" em "Algum Projeto Legal". */
function toDisplayName(slug: string): string {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function normalize(repo: GithubApiRepo): GithubRepo {
  return {
    id: repo.id,
    name: repo.name,
    displayName: toDisplayName(repo.name),
    description: repo.description,
    htmlUrl: repo.html_url,
    homepage: repo.homepage,
    language: repo.language,
    topics: repo.topics ?? [],
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.updated_at,
    isFork: repo.fork,
    isArchived: repo.archived,
  };
}

/**
 * Busca os repositórios públicos, já ordenados pelo
 * último push. Lança erro em caso de falha (para o hook tratar o estado).
 */
export async function fetchRepos(signal?: AbortSignal): Promise<GithubRepo[]> {
  const { githubUser, githubPerPage } = siteConfig;
  const url = `https://api.github.com/users/${githubUser}/repos?sort=pushed&per_page=${githubPerPage}`;

  const res = await fetch(url, {
    signal,
    headers: { Accept: "application/vnd.github+json" },
  });

  if (res.status === 403) {
    throw new Error(
      "Limite de requisições da API do GitHub atingido. Tente novamente em alguns minutos."
    );
  }
  if (!res.ok) {
    throw new Error(`Falha ao carregar repositórios (HTTP ${res.status}).`);
  }

  const data = (await res.json()) as GithubApiRepo[];
  return data.map(normalize);
}
