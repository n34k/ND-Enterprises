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
        primary: '#3A405A',
        secondary: '#64748B',
        text: '#FFFFFF',
        button: '#3B82F6',
        pop: '#F59E0B'
      }
    },
  },
  plugins: [],
}

