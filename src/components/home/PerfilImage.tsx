import PerfilFloatingIcon from "./PerfilFloatingIcon";
import type { PerfilImageProps } from "./types";

export default function PerfilImage({ floatingIcons }: PerfilImageProps) {
  return (
    <div className="w-full md:w-1/2 flex justify-center relative">
      <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] group flex-shrink-0">
        
        {/* bordas */}
        <div className="absolute inset-0 border border-dashed border-synth-secondary/30 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border border-dotted border-synth-primary rounded-full animate-spin-reverse-slow"></div>
        
       <div className="absolute inset-10 bg-gradient-to-tr from-synth-secondary to-synth-primary blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
       
        {/* imagem */}
        <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0518] to-transparent opacity-30 z-20  mix-blend-multiply"></div>
          <img
            src="https://i.ibb.co/wZcrkg7Q/20260220-0930-image.png"
            alt="Jonas Perfil"
            className="w-full h-full object-cover filter contrast-125 hover:scale-105  transition-transform duration-700"
          />
        </div>

        <PerfilFloatingIcon icons={floatingIcons} />
      </div>
    </div>
  );
}
