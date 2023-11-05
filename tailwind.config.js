/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors:{
        skyBlue: "#007BFF",
        pearlWhite: "#F0F0F0",
        charcoalGray: "#333333",
        oliveGreen: "#6B8E23",
        lightGray: "#CCCCCC"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
],
  
}

