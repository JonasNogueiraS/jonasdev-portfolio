import { FaReact } from "react-icons/fa";
import PerfilImage from "./PerfilImage";
import PerfilText from "./PerfilText";
import type { FloatingIconItemProps } from "./types";

const floatingIconsData: FloatingIconItemProps[] = [
    { 
        id: "icon-react",
        icon:FaReact,
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
    positionClass: "top-32 left-4", // Posição ajustada
    animationClass: "animate-float",
    colorClass: "text-blue-400",
  }
]

export default function Profile(){
    return(

        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
                <PerfilText/>
                {/* Imagem e icones  */}
                <PerfilImage floatingIcons={floatingIconsData}/>
            </div>
        </section>
    )
}