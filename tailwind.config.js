/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryCyan: "hsl(180, 66%, 49%)",
      primaryDarkViolet: "hsl(257, 27%, 26%)",
      secondaryRed: "hsl(0, 87%, 67%)",
      neutralGray: "hsl(0, 0%, 75%)",
      neutralGrayishViolet: "hsl(257, 27%, 63%)",
      neutralVeryDarkBlue: "hsl(255, 11%, 22%)",
      neutralVeryDarkViolet: "hsl(260, 8%, 14%)",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
