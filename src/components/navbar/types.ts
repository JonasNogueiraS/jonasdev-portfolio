import type { IconType } from "react-icons";

type PhosphorIcon = IconType;

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



