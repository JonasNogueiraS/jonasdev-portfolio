import About from "./components/about/About"
import Profile from "./components/home/Perfil"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import MainLayout from "./layout/MainLayout"

function App() {

  return (
    <MainLayout>
      <Profile/>
      <About/>
      <Skills/>
      <Projects/>
    </MainLayout>
  )
}

export default App
