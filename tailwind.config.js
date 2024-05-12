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
        red: '#ff1654',
      },
    },
  },
  plugins: [],
};

