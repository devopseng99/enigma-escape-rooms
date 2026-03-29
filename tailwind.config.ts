import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1C1917',
        gold: '#F59E0B',
        'gold-light': '#FBBF24',
        'gold-dark': '#D97706',
        danger: '#EF4444',
        'dark-card': '#292524',
        'dark-border': '#44403C',
      },
    },
  },
  plugins: [],
};

export default config;
