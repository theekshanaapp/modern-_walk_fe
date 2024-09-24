/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#0E0E0E',
        lightGray: '#F5F5F5',
        lightBlue: '#0E42FD',
      },
    },
  },
  plugins: [],
}