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
    positionClass: "top-2 right-2 sm:top-4 sm:right-4 md:top-10 md:right-10",
    animationClass: "animate-float",
    colorClass: "text-synth-secondary",
  },
  {
    id: "text-js",
    text: "JS",
    positionClass: "bottom-2 left-0 sm:bottom-6 sm:left-2 md:bottom-20 md:left-10",
    animationClass: "animate-float-delayed",
    colorClass: "text-synth-primary",
  },
  {
    id: "text-ts",
    text: "TS",
    positionClass: "top-16 left-0 sm:top-20 sm:left-2 md:top-32 md:left-4",
    animationClass: "animate-float",
    colorClass: "text-blue-400",
  }
];
