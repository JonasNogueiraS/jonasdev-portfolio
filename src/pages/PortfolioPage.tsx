import MainLayout from "@/layout/MainLayout";
import Profile from "@/components/home/Perfil";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function PortfolioPage() {
  return (
    <MainLayout>
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
