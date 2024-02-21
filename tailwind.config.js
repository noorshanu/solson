/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      dream: "'dream',sans-serif",
      popins: "'Poppins', sans-serif",
      daughter: "'Architects Daughter', cursive",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      primary: "rgba(224, 33, 138, 1)",
      secondary: "rgba(255, 188, 217, 1)",
      "sky-blue": "#95E3FD",
    },
    extend: {},
  },
  plugins: [],
};
