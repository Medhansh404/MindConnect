/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: 'rgb(from #fdd757 r g b/ 1)',
        customGreen: '#28B482',
        customBlue: '#001737',
        customDarkYellow:'#D28C1E',
      },
    }
  },
  plugins: [],
}