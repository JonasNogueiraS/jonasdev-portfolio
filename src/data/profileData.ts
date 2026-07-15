import { FaReact } from "react-icons/fa";
import type { ElementType } from "react";

export interface FloatingIconItem {
  id: string;
  icon?: ElementType;
  text?: string;
  positionClass: string;
  animationClass: string;
  colorClass?: string;
}

export const floatingIconsData: FloatingIconItem[] = [
  { 
    id: "icon-react",
    icon: FaReact,
    positionClass: "top-10 right-10",
    animationClass: "animate-float",
    colorClass: "text-synth-secondary",
  },
  {
    id: "text-js",
    text: "JS",
    positionClass: "bottom-20 left-10",
    animationClass: "animate-float-delayed",
    colorClass: "text-synth-primary",
  },
  {
    id: "text-ts",
    text: "TS",
    positionClass: "top-32 left-4",
    animationClass: "animate-float",
    colorClass: "text-blue-400",
  }
];
