/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1f212c",
        blueGray: "#2a2c3a",
        whity: "#f0f8ff",
        accent: "#2c5bff",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
