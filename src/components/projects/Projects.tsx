import SectionHeader from "@/components/common/SectionHeader";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="MEUS"
          highlight="PROJETOS"
          subtitle="// Featured_Work"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
