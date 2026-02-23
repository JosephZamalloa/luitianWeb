import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        magenta: "#cc00ff",
        "magenta-dim": "#8800aa",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      keyframes: {
        "ring-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.12)", opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "magenta-pulse": {
          "0%, 100%": { textShadow: "0 0 30px rgba(204,0,255,0.4), 0 0 60px rgba(204,0,255,0.2)" },
          "50%": { textShadow: "0 0 60px rgba(204,0,255,0.9), 0 0 120px rgba(204,0,255,0.5), 0 0 200px rgba(204,0,255,0.3)" },
        },
      },
      animation: {
        "ring-pulse": "ring-pulse 2.5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "magenta-pulse": "magenta-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
