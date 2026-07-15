import SectionHeader from "@/components/common/SectionHeader";
import AboutStats from "./AboutStats";
import AboutText from "./AboutText";
import { aboutStatsData, aboutHighlightsData } from "@/data/aboutData";

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Sobre" 
          highlight="MIM" 
          highlightType="stroke" 
          subtitle="// Who_Am_I" 
          className="mb-14"
        />

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          <AboutStats stats={aboutStatsData} />
          <AboutText highlights={aboutHighlightsData} />
        </div>
      </div>
    </section>
  );
}
