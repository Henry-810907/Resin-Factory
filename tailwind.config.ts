import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#8BC34A",
          greenDark: "#7AB13F",
          blue: "#2BAEDC",
          yellow: "#FCEE51",
          pink: "#E91E63",
          lightBlue: "#D6EBF4",
          dark: "#3F4858",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        chunky: ["var(--font-chunky)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
