/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        zeus: '#2B2120',
        brown_red: '#922F0F',
        rose_gold: '#E1C8C8',
        ebony: '#282142',
        davysgray: '#585A56',
        raisinblack: '#172424',
        antiflashwhite: '#F1F3F2',
        columbiablue: '#C2D3DA',
        weldonblue: '#81A3A7',
      }
    },
  },
  plugins: [],
}

