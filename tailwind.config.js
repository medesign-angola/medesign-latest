/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '1600px',
      '5xl': '1900px',
      '6xl': '2050px'
    },
    extend: {
      colors: {
        primary: '#030303',
        secondary: '',
      }
    },
  },
  plugins: [],
}