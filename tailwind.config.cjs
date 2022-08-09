/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ffe9d6",
      secondary: "#ff9a3d",
      white: "#fff",
      black: "#000",
    },
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
      fontFamily: {
        Lobster: ["Lobster Two", "cursive"],
        Nautigal: ["The Nautigal", "cursive"],
        Lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
