import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
        "surface-hover": "var(--surface-hover)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [nextui()],
};
export default config;
