/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      primary: "#413b88",
      "primary-800": "#2f2b63",
      secondary: "#222",
      "secondary-800": "#171717",
    },
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
    },
  },
  plugins: [

  ],
}

