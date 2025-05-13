import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        screens: {
          DEFAULT: '100%',
          xl: '1440px',
        },
        padding: {
          DEFAULT: '10px',
        },
      },
      spacing: {
        5: '20px',
      }
    },
  },
  plugins: [],
} satisfies Config;
