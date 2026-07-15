import type { AboutHighlightItem } from "@/data/aboutData";
import HighlightCard from "@/components/common/HighlightCard";

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
        {highlights.map((item) => (
          <HighlightCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            color={item.primaryColor}
          />
        ))}
      </div>
    </div>
  );
}
