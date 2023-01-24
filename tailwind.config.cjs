/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        Barl: ["Barlow"],
        Frau: ["Fraunces"],
      }
    },
  },
  plugins: [],
}
