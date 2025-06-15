const { text } = require('stream/consumers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Manrope', 'sans-serif']
      },
      colors: {
        primary: '#262939',
        secondary: '#75798B',
        text: '#FFFFFF',
        subText: '#CCCCCC',
        button: '#3B82F6',
        pop: '#F59E0B'
      }
    },
  },
  plugins: [],
}

