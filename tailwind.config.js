/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '506px',
      // => @media (min-width: 506px) { ... }

      'md': '790px',
      // => @media (min-width: 860px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [require('daisyui')],
}
