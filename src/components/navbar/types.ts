import type { IconProps } from "@phosphor-icons/react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type PhosphorIcon = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>

export interface NavbarProps{
    className?: string;
    logo?: string;

}

export interface NavLinkItem{
    name: string;
    href: string;
}

export interface SocialLinkItem{
    href: string;
    icon: PhosphorIcon;
    label: string;
}



