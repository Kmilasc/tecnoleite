/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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
        main: {
            100:'#edfdff',
            200: '#ddfcff',
            300: '#3fb9c4',
            400:'#3aaab4',
            500:'#359ca5',
            600: '#308E96',
            800: '#28787e',
        },
        c2: '#606062',
        c3: '#2C5274',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

