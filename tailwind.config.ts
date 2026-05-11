import { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace']
      },
      colors: {
        synth: {
          deep: "#05020a", // O preto profundo (Footer)
          void: "#0f0518", // O fundo principal
          midnight: "#1a0b2e", // Gradiente meio
          twilight: "#2d1b4e", // Gradiente topo
          primary: "#ff00ff", // Neon Pink/Magenta
          secondary: "#00ffff", // Neon Marinhow
          accent: "#ffd700", // Amareolow
        },
      },
      animation: {
        "float": 'float 3s ease-in-out infinite',
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "grid-move": "grid-move 20s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse-slow": "spin 15s linear infinite reverse",
        "pulse-glow": "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "grid-move": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        // Animação de pulso neon
        "pulseGlow": {
          "0%, 100%": { 
            opacity: "1",
            filter: "drop-shadow(0 0 10px rgba(255, 0, 255, 0.6))" // Sombra Rosa
          },
          "50%": { 
            opacity: "0.7",
            filter: "drop-shadow(0 0 10px #00ffff)" // Expande para Sombra Ciano
          },
        },
      },
      backgroundImage: {
        "synth-grid":
          "linear-gradient(to right, rgba(255,0,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 255, 0.2) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
