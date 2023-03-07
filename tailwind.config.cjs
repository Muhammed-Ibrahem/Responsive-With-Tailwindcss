/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(var(--softBlue) / <alpha-value>)",
        softRed: "hsl(var(--softRed) / <alpha-value>)",
        grayishBlue: "hsl(var(--grayishBlue) / <alpha-value>)",
        veryDarkBlue: "hsl(var(--veryDarkBlue) / <alpha-value>)",
      },
      fontFamily: {
        Rubik: ["Rubik"],
      },
      fontSize: {
        bodyFont: "var(--fontSize)",
      },
    },
  },
  plugins: [],
};
