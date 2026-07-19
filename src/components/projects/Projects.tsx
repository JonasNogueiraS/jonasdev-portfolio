import { FiGithub, FiAlertTriangle } from "react-icons/fi";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectCard from "./ProjectCard";
import { useProjects } from "@/hooks/useProjects";
import { siteConfig } from "@/config/site";

export default function Projects() {
  const { projects, loading, error, autoCurated } = useProjects();

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="MEUS"
          highlight="PROJETOS"
          subtitle="// Direto_do_meu_GitHub"
          className="mb-6"
        />

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 font-light">
          {autoCurated
            ? "Uma seleção dos meus repositórios mais recentes, sincronizada automaticamente com o GitHub."
            : "Projetos que selecionei para mostrar meu trabalho — atualizados diretamente do GitHub."}
        </p>

        {loading && <ProjectsSkeleton />}

        {!loading && error && <ProjectsError message={error} />}

        {!loading && !error && projects.length === 0 && <ProjectsEmpty />}

        {!loading && !error && projects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden animate-pulse"
        >
          <div className="aspect-video bg-white/5" />
          <div className="p-6 space-y-3">
            <div className="h-5 w-2/3 bg-white/10 rounded" />
            <div className="h-3 w-full bg-white/5 rounded" />
            <div className="h-3 w-4/5 bg-white/5 rounded" />
            <div className="flex gap-2 pt-2">
              <div className="h-6 w-14 bg-white/5 rounded" />
              <div className="h-6 w-14 bg-white/5 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsError({ message }: { message: string }) {
  return (
    <div className="max-w-md mx-auto text-center rounded-2xl border border-synth-primary/30 bg-synth-primary/5 p-8">
      <FiAlertTriangle className="mx-auto text-synth-primary mb-3" size={28} />
      <p className="text-gray-300 mb-4">{message}</p>
      <a
        href={`https://github.com/${siteConfig.githubUser}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-mono text-sm text-synth-secondary hover:text-white transition-colors"
      >
        <FiGithub size={16} /> Ver repositórios no GitHub
      </a>
    </div>
  );
}

function ProjectsEmpty() {
  return (
    <div className="max-w-md mx-auto text-center rounded-2xl border border-white/10 bg-white/[0.02] p-8">
      <FiGithub className="mx-auto text-gray-500 mb-3" size={28} />
      <p className="text-gray-400">
        Nenhum projeto destacado ainda. Em breve, novos trabalhos por aqui.
      </p>
    </div>
  );
}
