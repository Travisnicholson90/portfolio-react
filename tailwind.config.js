/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      colors: {
        purple: '#700B97',
        lightPink: '#D4ADFC',
        darkGreen: '#064635',
        darkBlue: '#13005A',
        grayishWhite: '#DFDFDE',
        peach: '#FA9494',
        brightPeach: '#FE7E6D',
        red: '#EB1D36',
        lime: '#B4FE98',
        lightBlue: '#00E7FF',
        pink: '#FF55BB',
        neonPeach: '#FF6464'

      },
  },
  plugins: [],
}