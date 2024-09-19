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
      },
    },
  },
  plugins: [],
}