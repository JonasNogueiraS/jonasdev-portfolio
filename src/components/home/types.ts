import type { ElementType } from "react";

export interface FloatingIconItemProps{
    id: string; 
    icon?: ElementType;
    text?: string;
    positionClass: string;
    animationClass: string;
    colorClass?: string;
}

export interface PerfilImageProps{
    floatingIcons: FloatingIconItemProps[];
}