import About from "./components/about/About"
import Profile from "./components/home/Perfil"
import MainLayout from "./layout/MainLayout"

function App() {

  return (
    <MainLayout>
      <Profile/>
      <About/>
    </MainLayout>
  )
}

export default App
