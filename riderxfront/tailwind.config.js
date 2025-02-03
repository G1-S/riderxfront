/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },

      colors:{
        davysgray : '#585A56',
        raisinblack :'#172424',
        antiflashwhite : '#F1F3F2',
        columbiablue : '#C2D3DA',
        weldonblue : '#81A3A7',
      }

    },
  },
  plugins: [],
}
