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
        },
        padding: {
          DEFAULT: '15px',
        },
      },
      spacing: {
        5: '20px',
      },
      fontSize: {
        'fluidBase': 'clamp(1.4rem, 1.5vw, 1.8rem)',
        'xs-fluid': 'clamp(0.65rem, 1vw, 0.75rem)',
        'sm-fluid': 'clamp(0.75rem, 1.2vw, 0.875rem)',
        'base-fluid': 'clamp(0.875rem, 1.5vw, 1rem)',
        'lg-fluid': 'clamp(1rem, 1.7vw, 1.125rem)',
        'xl-fluid': 'clamp(1rem, 2vw, 1.25rem)',
        '2xl-fluid': 'clamp(1.25rem, 2.5vw, 1.5rem)',
        '3xl-fluid': 'clamp(1.5rem, 3vw, 1.875rem)',
        '4xl-fluid': 'clamp(1.8rem, 4vw, 2.25rem)',
        '5xl-fluid': 'clamp(2.5rem, 5vw, 3rem)',
        '6xl-fluid': 'clamp(3rem, 6vw, 3.75rem)',
      }
    },
  },
  plugins: [],
} satisfies Config;
