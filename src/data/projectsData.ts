import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { ElementType } from "react";

export interface ProjectLink {
  href: string;
  label: string;
  icon: ElementType;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  /** Cor de acento do card, seguindo o tema synthwave. */
  accent?: "primary" | "secondary";
}

/**
 * Substituir os itens pelos projetos reais
 * Os links de cada card são derivados de `repoUrl` / `liveUrl`.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "portfolio",
    title: "Portfólio Synthwave",
    description:
      "Portfólio pessoal com estética synthwave, construído com React, TypeScript e Tailwind CSS, focado em performance e código limpo.",
    image: "https://placehold.co/600x400/1a0b2e/00ffff?text=Portfolio",
    tags: ["React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/JonasNogueiraS",
    accent: "secondary",
  },
  {
    id: "mobile-app",
    title: "App Multiplataforma",
    description:
      "Aplicativo mobile desenvolvido em Flutter, com interface fluida e integração de dados em tempo real.",
    image: "https://placehold.co/600x400/1a0b2e/ff00ff?text=Mobile",
    tags: ["Flutter", "Dart"],
    repoUrl: "https://github.com/JonasNogueiraS",
    accent: "primary",
  },
  {
    id: "web-app",
    title: "Web App React",
    description:
      "Interface web dinâmica com React e consumo de API, priorizando acessibilidade e componentização.",
    image: "https://placehold.co/600x400/1a0b2e/00ffff?text=Web+App",
    tags: ["React", "JavaScript", "REST API"],
    repoUrl: "https://github.com/JonasNogueiraS",
    liveUrl: "https://github.com/JonasNogueiraS",
    accent: "secondary",
  },
];

export function getProjectLinks(project: ProjectItem): ProjectLink[] {
  const links: ProjectLink[] = [];
  if (project.repoUrl) {
    links.push({ href: project.repoUrl, label: "Código", icon: FiGithub });
  }
  if (project.liveUrl) {
    links.push({ href: project.liveUrl, label: "Ver online", icon: FiExternalLink });
  }
  return links;
}
