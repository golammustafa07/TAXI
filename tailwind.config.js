/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        'container' : '1144px'
      },
      fontFamily : {
        'pops' : ['Poppins','Sans-Serif'],
        'robo' : ['Roboto','Sans-Serif']
      },
      colors : {
        'overlay' : "rgba(0, 0, 0, 0.60)"
      },
      backgroundImage : {
        'banner' : "url(../src/assets/banner.png)",
        'counter' : "url(../src/assets/counter.png)",
        'app' : "url(../src/assets/app.png)",
        'footer' : "url(../src/assets/footer.png)"
      }
    },
  },
  plugins: [],
}