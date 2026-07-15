import type { FloatingIconItem } from "@/data/profileData";

interface PerfilFloatingIconProps {
  icons: FloatingIconItem[];
}

export default function PerfilFloatingIcon({ icons }: PerfilFloatingIconProps) {
  return (
    <>
      {icons.map((item) => (
        <div
          key={item.id}
          className={`absolute z-30 bg-[#0f0518]/80 backdrop-blur border border-white/20 p-2 md:p-3 pointer-events-none rounded-lg ${item.positionClass} ${item.animationClass}`}
        >
          {/* carrega icone */}
          {item.icon && (
            <item.icon
              className={`w-6 h-6 md:w-8 md:h-8 ${item.colorClass || "text-white"}`}
            />
          )}

          {/* carrega texto */}
          {item.text && (
            <span
              className={`font-display font-bold text-base md:text-xl ${item.colorClass || "text-white"}`}
            >
              {item.text}
            </span>
          )}
        </div>
      ))}
    </>
  );
}
