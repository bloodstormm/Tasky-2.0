/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#1a1f25",
        grayish: "#272c32",
        whity: "#f0f8ff",
        accent: "#883f47",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
