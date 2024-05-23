/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        light: "#fff",
        "off-white": "rgba(147, 107, 232, 0.05)",
        darkShade: "rgba(0, 0, 0, 0.573)",
        bold: "#151b1d",
        red: "#ff1654",
        grey: "#777777",
        amber: "rgb(67 20 7)",
        lightGrey: "#c5c5c5",
      },
      screens: {
        smallBP: "320px",
        semiBP: "546px",
        custom: "706px",
        custom1: "992px",
        custom2: "1024px",
        custom3: "1100px",
      },
    },
  },
  plugins: [],
};

