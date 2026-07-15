import { useEffect, useState } from "react";

/** Altura da navbar fixa em px (h-20 = 5rem). */
const NAVBAR_HEIGHT = 80;

/**
 * Percentual da altura da viewport (a partir do rodapé) ignorado na
 * detecção. Quanto MAIOR, mais cedo a seção é marcada como ativa.
 */
const ACTIVATION_OFFSET = 60;

/**
 * Observa as seções da página e retorna o `id` da que está ativa
 * (mais próxima do topo da viewport, logo abaixo da navbar fixa).
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // dentre as seções visíveis, escolhe a mais próxima do topo
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // topo: compensa a navbar fixa; base: ignora a parte inferior
        // da tela para ativar a seção quando ela sobe o suficiente
        rootMargin: `-${NAVBAR_HEIGHT}px 0px -${ACTIVATION_OFFSET}% 0px`,
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
