import { FiCpu, FiTerminal, FiUserCheck } from "react-icons/fi";
import { FaRocket, FaMapMarkerAlt } from "react-icons/fa";
import type { ElementType } from "react";

export interface AboutStatItem {
  id: string;
  label: string;
  value: string;
  icon: ElementType;
}

export interface AboutHighlightItem {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  primaryColor: "primary" | "secondary";
}

export const aboutStatsData: AboutStatItem[] = [
  {
    id: "status",
    label: "Status",
    value: "Open to Work",
    icon: FiUserCheck,
  },
  {
    id: "formacao",
    label: "Formação",
    value: "Ciência da Computação",
    icon: FiTerminal,
  },
  {
    id: "stack",
    label: "Stack",
    value: "React & Flutter",
    icon: FiCpu,
  },
  {
    id: "local",
    label: "Local",
    value: "Caxias, MA",
    icon: FaMapMarkerAlt,
  },
];

export const aboutHighlightsData: AboutHighlightItem[] = [
  {
    id: "performace",
    title: "Performace",
    description: "Otimização Contínua",
    icon: FaRocket,
    primaryColor: "primary",
  },
];
