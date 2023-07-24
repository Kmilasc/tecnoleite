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
      },
      colors: {
        c1: '#308E96',
        c2: '#606062',
        c3: '#2C5274'
      }
    },
  },
  plugins: [],
}

