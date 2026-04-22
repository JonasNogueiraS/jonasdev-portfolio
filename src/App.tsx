import About from "./components/about/About"
import Profile from "./components/home/Perfil"
import Skills from "./components/skills/Skills"
import MainLayout from "./layout/MainLayout"

function App() {

  return (
    <MainLayout>
      <Profile/>
      <About/>
      <Skills/>
    </MainLayout>
  )
}

export default App
