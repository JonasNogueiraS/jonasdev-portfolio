import { useEffect, useState } from "react";

/** Altura da navbar fixa em px (5rem). */
const NAVBAR_HEIGHT = 80;

/*
 * linha. Quanto MAIOR, mais cedo a seção é marcada como ativa.
 */
const ACTIVATION_LINE_RATIO = 0.4;

/**
 * Observa as seções da página e retorna o `id` da que está ativa */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      // Linha de ativação: logo abaixo da navbar + uma fração da viewport.
      const line = NAVBAR_HEIGHT + window.innerHeight * ACTIVATION_LINE_RATIO;

      // Se chegamos ao fim da página, força a última seção .
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let current = sectionIds[0];

      if (atBottom) {
        current = sectionIds[sectionIds.length - 1];
      } else {
        // Percorre em ordem e mantém a última seção cujo topo já cruzou
        // a linha (top <= line) — essa é a que ocupa a linha de ativação.
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          if (el.getBoundingClientRect().top <= line) {
            current = id;
          }
        }
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      // Agenda a leitura para o próximo frame (evita layout thrashing).
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeId;
}
