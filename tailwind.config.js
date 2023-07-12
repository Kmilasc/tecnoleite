/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        conforter: ['Roboto Condensed', 'sans-serif'],
      },
      screens: {
        xs: '360px'
      }
    },
  },
  plugins: [],
}

