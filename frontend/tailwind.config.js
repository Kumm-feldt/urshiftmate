/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-seriff']

      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  darkMode: 'media', // or 'media'

  plugins: [    require('flowbite/plugin')
],
}

