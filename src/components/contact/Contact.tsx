import { FiMail, FiMapPin } from "react-icons/fi";
import SectionHeader from "@/components/common/SectionHeader";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/data/navData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="VAMOS"
          highlight="CONVERSAR"
          subtitle="// Get_In_Touch"
          gradientColor="secondary"
          className="mb-6"
        />

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed">
          Estou <span className="text-synth-secondary font-normal">aberto a oportunidades</span> como
          desenvolvedor front-end e mobile. Se você procura alguém curioso, comprometido e entusiasmado
          por criar boas experiências, adoraria fazer parte do seu time.
        </p>

        <div className="flex flex-col items-center gap-8 max-w-xl mx-auto">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="group relative px-8 py-4 bg-synth-secondary/15 hover:bg-synth-secondary/30 border border-synth-secondary text-synth-secondary hover:text-white font-display font-bold tracking-wider transition-all duration-300 skew-x-[-10deg] hover:shadow-[0_0_25px_#00ffff] rounded-sm"
          >
            <span className="flex items-center gap-3 skew-x-[10deg]">
              <FiMail size={20} /> ENTRE EM CONTATO
            </span>
          </a>

          <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
            <FiMapPin size={15} className="text-synth-primary" />
            Caxias, Maranhão · Brasil · Disponível para remoto
          </div>

          <div className="flex items-center gap-6 pt-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-synth-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
