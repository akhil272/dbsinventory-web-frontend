const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F21313",
        secondary: "#2A265F",
        pastel_green: "#00A388",
        pending: "#545a5f",
        waiting: "#5a81ad",
        accepted: "#67c392",
        followup: "#ee676c",
      },
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

// #00A388 green
// #E74C3C red
// #2C3E50 blue
