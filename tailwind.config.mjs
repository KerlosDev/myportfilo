const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'admin-imag': "url('/bgadmin.svg')",

        'noise': "url('/noise.png')",
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'], // Add Anton as a custom font
        arabicUI: ['arabicUI', 'sans-serif'],
        arabicUI2: ['arabicUI2', 'sans-serif'],
        arabicUI3: ['arabicUI3', 'sans-serif'],
        abril: ['"Abril Fatface"', 'cursive'], // Custom font name
        Gaza: ['DGGaza', 'sans-serif'],
        rakkas: ['Rakkas', 'sans-serif'],


      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin 10s linear infinite reverse',
      },
      // ...existing theme extensions...
    },
  },
  plugins: [],
};
