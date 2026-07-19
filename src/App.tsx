import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PortfolioPage from "./pages/PortfolioPage"

// Lazy: isola o Firebase num chunk próprio, fora da página pública.
const AdminPage = lazy(() => import("./pages/AdminPage"))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route
          path="/admin"
          element={
            <Suspense fallback={null}>
              <AdminPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
