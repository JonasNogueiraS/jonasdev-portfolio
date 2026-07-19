import { FiDownload } from "react-icons/fi";
import { siteConfig } from "@/config/site";

export default function PerfilText() {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-20">
      <div className="inline-flex items-center gap-2 max-w-full px-3 py-1 mb-4 rounded-full border bg-synth-secondary/10 border-synth-secondary/30 backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-synth-secondary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-synth-secondary" />
        </span>
        <span className="text-synth-secondary font-mono text-xs sm:text-sm tracking-wider">
          DISPONÍVEL PARA OPORTUNIDADES
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-display leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] ">
        Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-synth-secondary to-synth-primary animate-pulse-glow">Jonas</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8 font-display tracking-widest uppercase">
        Front-end &amp; Mobile <span className="text-synth-primary">Developer</span>
      </h2>
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light">
        Desenvolvo interfaces rápidas e acessíveis com{" "}
        <span className="text-gray-200">React</span> e apps multiplataforma com{" "}
        <span className="text-gray-200">Flutter</span>. Estudante de Ciência da Computação em busca
        do primeiro time para transformar código limpo em produtos reais.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
        <a href="#projects" className="group relative px-8 py-3 bg-synth-primary/20 hover:bg-synth-primary/40 border border-synth-secondary text-synth-primary hover:text-white font-display font-bold tracking-wider transition-all duration-300 skew-x-[-10deg] hover:shadow-[0_0_20px_#ff00ff]">
          <span className="block skew-x-[10deg]">VER PROJETOS</span>
        </a>
        <a href="#contact" className="group relative px-8 py-3 bg-transparent border border-white/30 hover:border-synth-secondary text-white font-display font-bold tracking-wider transition-all duration-300 skew-x-[-10deg] hover:shadow-[0_0_20px_#00ffff]">
          <span className="block skew-x-[10deg]">CONTRATE-ME</span>
        </a>
      </div>
      {siteConfig.resumeUrl && (
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-synth-secondary transition-colors"
        >
          <FiDownload size={16} /> Baixar currículo (PDF)
        </a>
      )}

      {/* snippet */}
      <div className="mt-12 p-4 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm font-mono text-xs md:text-sm text-gray-500 hidden md:block select-none">
        <p><span className="text-synth-secondary">const</span> <span className="text-synth-accent">stack</span> = [<span className="text-green-400">'React'</span>, <span className="text-green-400"> 'TypeScript'</span>, <span className="text-green-400">'Tailwind'</span>];</p>
        <p><span className="text-synth-secondary">while</span> (alive) <span className="text-synth-accent">code</span>();</p>
      </div>
    </div>
  );
}
