/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        diamond: '6px 6px 5px 0px rgba(0,0,0,1)'
      }
    },
  },
  plugins: [
    // require('./dist/tailwindcss-perspective.cjs'),
    require('@kamona/tailwindcss-perspective'),
  ],
}
