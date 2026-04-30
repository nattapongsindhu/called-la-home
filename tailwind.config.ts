import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        trust: "#1f4d7a",
        sage: "#55715f",
        paper: "#f8fafc",
        line: "#d8dee6"
      }
    }
  },
  plugins: []
};

export default config;
