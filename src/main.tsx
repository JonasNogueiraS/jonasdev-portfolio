import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Impede o navegador de restaurar a posição de rolagem anterior
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
if (!window.location.hash) {
  window.scrollTo(0, 0)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
