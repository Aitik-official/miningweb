import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4db2ec",
          dark: "#3399d4",
        },
        accent: {
          DEFAULT: "#e29c04",
          dark: "#c78600",
        },
        dark: "#222222",
        "tagdiv-blue": "#4db2ec",
        "tagdiv-gold": "#e29c04",
        "tagdiv-teal": "#008d7f",
        "tagdiv-red": "#e53935",
        "tagdiv-purple": "#8e44ad",
        "tagdiv-dark": "#222222",
        "tagdiv-black": "#111111",
        "tagdiv-border": "#e6e6e6",
        "tagdiv-bg": "#f9f9f9",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        condensed: ["Roboto Condensed", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
