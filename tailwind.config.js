import { CgDarkMode } from 'react-icons/cg'

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")


const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
     
      
    },
  },
  plugins: [],
}
