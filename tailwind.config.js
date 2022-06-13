/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primaryCyan: "#2acfcf",
        primaryDarkViolet: "#3b3054",
        secondaryRed: "#f46262",
        neutralGray: "#bfbfbf",
        neutralGrayishViolet: "9687ba",
        neutralVeryDarkBlue: "#35323e",
        neutralVeryDarkViolet: "h#232127",
      },
    },
  },
};
