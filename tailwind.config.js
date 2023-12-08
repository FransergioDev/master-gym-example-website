/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      white: "#FFF",
      black: "#000",
      yellow: "#EBBA0E",
      gray: {
        100: "#D9D9D9",
        200: "#8D8B84",
      },
    },
    extend: {
      fontFamily: {
        kanit: ["kanit", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
