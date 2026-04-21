import type { AboutHighlightItem } from "./types";

interface AboutTextProps {
  highlights: AboutHighlightItem[];
}

export default function AboutText({ highlights }: AboutTextProps) {
  return (
    <div className="w-full md:w-7/12 text-left">
      <h3 className="text-2xl font-display text-white mb-6">
        Desenvolvedor Criativo &{" "}
        <span className="text-synth-primary">Problem Solver</span>
      </h3>
      <p className="text-gray-300 text-lg leading-8 mb-6 font-light">
        Sou estudante de Ciência da Computação apaixonado por construir
        aplicações que impactam. Com uma forte base em JavaScript, foco na
        criação de interfaces web dinâmicas com React e no desenvolvimento
        mobile multiplataforma utilizando Flutter, transformando conceitos
        complexos em aplicações fluidas.
      </p>

      <p className="text-gray-300 text-lg leading-8 mb-6 font-light">
        Acredito que o bom desenvolvimento vai além do código visual.
        Paralelamente às interfaces, dedico-me à pesquisa acadêmica explorando o
        universo da Inteligência Artificial e do Processamento de Linguagem
        Natural (NLP), buscando sempre integrar inovação, performance e código
        limpo em cada desafio.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Renderizando os cards dinamicamente*/}
        {highlights.map((item) => {
          const colorClasses =
            item.primaryColor === "primary"
              ? "text-synth-primary hover:border-synth-primary/30"
              : "text-synth-secondary hover:border-synth-secondary/30";

          return (
            <div
              key={item.id}
              className={`p-2 bg-white/5 border border-white/5 rounded transition-colors group ${colorClasses}`}
            >
              <item.icon
                className={`mb-2 group-hover:scale-110 transition-transform ${item.primaryColor === "primary" ? "text-synth-primary" : "text-synth-secondary"}`}
              />
              <h4 className="font-display text-sm text-white">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
