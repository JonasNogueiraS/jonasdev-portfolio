import type { ElementType } from "react";

export interface AboutStatItem {
    id: string;
    label: string;
    value: string;
    icon: ElementType;
}

export interface AboutHighlightItem{
    id: string;
    title: string;
    description: string;
    icon: ElementType;
    primaryColor: "primary" | "secondary";
}