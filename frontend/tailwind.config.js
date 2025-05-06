/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          main: '#0078E8',
          dark: '#0056b3',
        },
        secondary: {
          light: '#ff6b9b',
          main: '#ff3675',
          dark: '#cc0044',
        },
      },
    },
  },
  plugins: [],
}