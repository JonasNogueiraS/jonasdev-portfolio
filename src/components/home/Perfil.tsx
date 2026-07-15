import PerfilImage from "./PerfilImage";
import PerfilText from "./PerfilText";
import { floatingIconsData } from "@/data/profileData";

export default function Profile() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
        <PerfilText />
        <PerfilImage floatingIcons={floatingIconsData} />
      </div>
    </section>
  );
}