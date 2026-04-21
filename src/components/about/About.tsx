import {
  CpuIcon,
  RocketIcon,
  RocketLaunchIcon,
  TerminalIcon,
  UserCheckIcon,
} from "@phosphor-icons/react";
import AboutHeader from "./AboutHeader";
import AboutStats from "./AboutStats";
import type { AboutHighlightItem, AboutStatItem } from "./types";
import AboutText from "./AboutText";

const aboutStatsData: AboutStatItem[] = [
  {
    id: "status",
    label: "Status",
    value: "Open to Work",
    icon: UserCheckIcon,
  },
  {
    id: "formacao",
    label: "Formação",
    value: "Ciência da Computação",
    icon: TerminalIcon,
  },
  {
    id: "stack",
    label: "Stack",
    value: "React & Flutter",
    icon: CpuIcon,
  },
  {
    id: "local",
    label: "Local",
    value: "Caxias, MA",
    icon: RocketLaunchIcon,
  },
];

const aboutHighlightsData: AboutHighlightItem[] = [
  {
    id: "performace",
    title: "Performace",
    description: "Otimização Contínua",
    icon: RocketIcon,
    primaryColor: "primary",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <AboutHeader />

        <div className="flex flex-col md:flex-row gap-16 items-center max-w-6xl mx-auto">
          <AboutStats stats={aboutStatsData} />

          <AboutText highlights={aboutHighlightsData} />
        </div>
      </div>
    </section>
  );
}
