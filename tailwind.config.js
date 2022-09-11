/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
    "./src/**/**/**/**/*.{html,ts,css}",
    "./projects/pkm-button/src/**/*.{html,ts,css}",
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    fontSize:{
      xs: ['.75rem', {
        lineHeight: '.5rem',
      }],
    }
  },
  plugins: [],
}