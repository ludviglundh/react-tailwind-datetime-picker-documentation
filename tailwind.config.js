/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  variants: {
    display: ['hover'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#E05263',
      },
    },
  },
  plugins: [],
}
