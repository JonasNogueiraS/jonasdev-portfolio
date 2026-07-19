import { Link } from "react-router-dom";
import { FiArrowUp, FiMail } from "react-icons/fi";
import { navItems, socialLinks } from "@/data/navData";
import { siteConfig } from "@/config/site";

const CONTACT_EMAIL = siteConfig.contactEmail;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 mt-20 bg-synth-deep/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca + tagline */}
          <div className="space-y-3">
            <span className="font-display text-xl font-bold tracking-widest text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              JONAS<span className="text-synth-primary">.DEV</span>
            </span>
            <p className="text-sm text-gray-400 max-w-xs">
              Desenvolvedor front-end e mobile em busca de novas oportunidades,
              focado em interfaces acessíveis e código limpo.
            </p>
          </div>

          {/* Navegação rápida */}
          <nav aria-label="Navegação do rodapé" className="space-y-3">
            <h2 className="font-mono text-sm uppercase tracking-widest text-synth-secondary">
              Navegação
            </h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    &lt;{item.name}/&gt;
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato e redes */}
          <div className="space-y-3">
            <h2 className="font-mono text-sm uppercase tracking-widest text-synth-secondary">
              Contato
            </h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-synth-primary transition-colors"
            >
              <FiMail size={18} />
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-5 pt-2 text-gray-400">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-synth-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* copyright + voltar ao topo */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {year} Jonas Nogueira. Feito com React, TypeScript e Tailwind CSS.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/admin"
              className="font-mono text-xs text-gray-600 hover:text-synth-primary transition-colors"
            >
              admin
            </Link>
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-synth-secondary transition-colors"
            >
              Voltar ao topo
              <FiArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
