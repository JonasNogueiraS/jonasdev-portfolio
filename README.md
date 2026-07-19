# Jonas Nogueira — Portfólio

Portfólio pessoal com estética **synthwave**, construído com **React 19 + TypeScript + Tailwind CSS** e **Vite**. Os projetos são carregados **automaticamente da API do GitHub**.

## ✨ Destaques

- **Projetos sincronizados com o GitHub** — busca os repositórios em tempo real (`/services/github.ts`), sem precisar cadastrar nada manualmente.
- **Estados de UI reais** — loading (skeletons), erro (rate limit da API) e vazio.
- **Responsivo, acessível e otimizado** — smooth scroll, `prefers-reduced-motion`, meta tags de SEO/Open Graph.

## 🚀 Rodando localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (tsc + vite)
npm run preview  # serve o build
```

## 🧭 Como funcionam os projetos

O fluxo de dados é:

```
GitHub API  →  Curadoria (overrides)  →  Cards da seção "Projetos"
```

1. `useProjects` busca os repositórios e aplica a curadoria publicada.
2. Se **não houver curadoria**, o site destaca automaticamente os 6 repositórios mais recentes (ignorando forks e o repo de perfil).
3. Com curadoria, apenas os projetos marcados como **destaque** aparecem, na ordem definida.

## 🛠️ Stack

React 19 · TypeScript · Tailwind CSS 3 · Vite 7 · React Router · React Icons
