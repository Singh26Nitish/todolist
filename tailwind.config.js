/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#110e1b',
        'brite': '#2d00f7'
      },
      fontFamily: {
        Robot: ['Roboto', 'sans-serif'],
      }
    },
    
  },
  plugins: [],
}

