import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-secondary": "rgb(var(--fg-secondary) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        "card-secondary": "rgb(var(--card-secondary) / <alpha-value>)",
        border: "rgb(var(--border-rgb) / var(--border-alpha))",
        "border-strong": "rgb(var(--border-rgb) / var(--border-strong-alpha))",
        accent: {
          DEFAULT: "#6366F1",
          soft: "#818CF8",
          deep: "#4F46E5",
          violet: "#8B5CF6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1240px",
        prose: "650px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 55s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
