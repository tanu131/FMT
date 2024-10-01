/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '4rem',
    },
    extend: {
      colors: {
        'blue': '#392B85',
        'light-color':'rgb(226 232 247 )',
        'page-light-color':'rgb(244 246 250)',
      },
    },
  },
  plugins: [],
}