import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        trust: "var(--color-trust)",
        sage: "var(--color-sage)",
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        soft: "var(--color-soft)",
        line: "var(--color-line)"
      }
    }
  },
  plugins: []
};

export default config;
