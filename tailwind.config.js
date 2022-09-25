/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightblue:'hsl(240, 75%, 98%)',
        lightgray:'sl(0, 0%, 75%)',
        darkblue:'hsl(243, 87%, 12%)',
        desaturateblue:'hsl(238, 22%, 44%)',
        brightblue:'hsl(224, 93%, 58%)',
        moderatecyan:'hsl(170, 45%, 43%)',
      }
    },
  },
  plugins: [],
}
