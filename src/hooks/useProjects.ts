import { useEffect, useState } from "react";
import { fetchRepos, type GithubRepo } from "@/services/github";
import {
  buildFeaturedProjects,
  loadCuration,
  mergeRepo,
  emptyCuration,
  type Project,
} from "@/services/curation";
import { siteConfig } from "@/config/site";

interface UseProjectsResult {
  projects: Project[];
  loading: boolean;
  error: string | null;
  /** True quando não há curadoria e estamos mostrando o fallback automático. */
  autoCurated: boolean;
}

/** Quantos projetos mostrar automaticamente quando não há curadoria. */
const AUTO_FEATURED_COUNT = 6;

/** Seleciona automaticamente os repositórios mais relevantes/recentes. */
function autoFeature(repos: GithubRepo[]): Project[] {
  const profileRepo = siteConfig.githubUser.toLowerCase();
  return repos
    .filter(
      (r) => !r.isFork && !r.isArchived && r.name.toLowerCase() !== profileRepo
    )
    .slice(0, AUTO_FEATURED_COUNT)
    .map((repo, index) =>
      mergeRepo(repo, {
        ...emptyCuration(index),
        accent: index % 2 === 0 ? "secondary" : "primary",
      })
    );
}

/**
 * Fonte única de verdade da seção de projetos: busca do GitHub, aplica a
 * curadoria e cai para uma seleção automática quando ainda não há curadoria.
 */
export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [autoCurated, setAutoCurated] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const repos = await fetchRepos(controller.signal);
        const curation = loadCuration();
        const featured = buildFeaturedProjects(repos, curation);

        if (featured.length > 0) {
          setProjects(featured);
          setAutoCurated(false);
        } else {
          setProjects(autoFeature(repos));
          setAutoCurated(true);
        }
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Erro ao carregar projetos.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  return { projects, loading, error, autoCurated };
}
