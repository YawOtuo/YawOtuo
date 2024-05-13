import {nextui} from '@nextui-org/theme';
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        yellow1: "#E6AF2E",
        yellow2 : "#D5AC4E",
        yellow3: "#B57F50",
        yellow4 : "#C8963E",
        purple1 : "#020213",
        purple2: "#020213",
      }
    },
  },
  plugins: [nextui()],
};
export default config;
