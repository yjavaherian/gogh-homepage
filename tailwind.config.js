/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        secondary: {
          50: "#f8f6f4",
          100: "#efebe5",
          200: "#ddd3c9",
          300: "#c8b8a9",
          400: "#b29785",
          500: "#a2816d",
          600: "#957161",
          700: "#7c5c52",
          800: "#664d46",
          900: "#53403b",
          950: "#2c201e",
        },

        primary: {
          50: "#f3f7f8",
          100: "#dfeaee",
          200: "#c3d8de",
          300: "#85afbb",
          400: "#6998a7",
          500: "#4d7c8d",
          600: "#436777",
          700: "#3b5663",
          800: "#364a54",
          900: "#314048",
          950: "#1d282f",
        },
      },
    },
  },
  plugins: [],
};
