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
        "champagne-light": "#f5df9c",
        "champagne-dark": "#b88634",
        platinum: "#e6e9ef",
        "platinum-muted": "#9aa0b0",
        electric: "#48a7ff",
        "electric-dark": "#2d7bd4",
        aura: "#8b5cf6",
        field: "#16a34a",
        live: "#ff365e",
        "live-dark": "#cc2a4b",
        "surface-light": "rgba(255,255,255,0.055)",
        "surface-mid": "rgba(255,255,255,0.08)",
        "border-light": "rgba(255,255,255,0.10)",
        "border-mid": "rgba(255,255,255,0.14)"
      },
      boxShadow: {
        glow: "0 0 60px rgba(72, 167, 255, 0.16)",
        "glow-intense": "0 0 80px rgba(72, 167, 255, 0.25)",
        gold: "0 18px 60px rgba(216, 180, 106, 0.14)",
        "gold-intense": "0 18px 60px rgba(216, 180, 106, 0.3)",
        "luxe-card": "0 24px 80px rgba(0,0,0,0.25)",
        "luxe-card-hover": "0 32px 100px rgba(0,0,0,0.35)",
        "premium": "0 4px 30px rgba(0,0,0,0.3)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.08)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "luxe-gradient": "linear-gradient(135deg, rgba(216,180,106,0.15), rgba(72,167,255,0.08), rgba(139,92,246,0.06))",
        "champagne-glow": "radial-gradient(circle at 50% 50%, rgba(216,180,106,0.2), transparent 60%)",
        "electric-glow": "radial-gradient(circle at 50% 50%, rgba(72,167,255,0.15), transparent 60%)",
        "hero-radial": "radial-gradient(ellipse at 50% 0%, rgba(216,180,106,0.08), transparent 50%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
        "premium-dark": "linear-gradient(180deg, #05070d 0%, #080d18 50%, #05070d 100%)"
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-medium": "float-medium 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-left": "slide-left 0.6s ease-out forwards",
        "slide-right": "slide-right 0.6s ease-out forwards",
        "border-dance": "border-dance 4s linear infinite"
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" }
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "border-dance": {
          "0%, 100%": { borderColor: "rgba(216,180,106,0.2)" },
          "50%": { borderColor: "rgba(72,167,255,0.3)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
