import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        midnight: "#080d18",
        graphite: "#101622",
        champagne: "#d8b46a",
        platinum: "#e6e9ef",
        electric: "#48a7ff",
        aura: "#8b5cf6",
        field: "#16a34a",
        live: "#ff365e"
      },
      boxShadow: {
        glow: "0 0 60px rgba(72, 167, 255, 0.16)",
        gold: "0 18px 60px rgba(216, 180, 106, 0.14)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
