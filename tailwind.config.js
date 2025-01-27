const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/***/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: "#f0f0f0",
      colors: {
        "utd-blue": "#359bdf",
        "utd-green": "#a9de7c",
        "utd-red": "#db4c44",
        "utd-purple": "#736de0",
        "utd-navy": "#012741",
        "utd-grey": "#f0f0f0",
      },
      borderRadius: {
        large: "1.5rem",
        medium: "0.5rem",
        small: "0.2rem",
      },
      animation: {
        fadeIn1s: "fadeIn 1s ease-in-out forwards", // 1-second fade-in animation
        fadeIn2s: "fadeIn 2s ease-in-out forwards", // 1-second fade-in animation
        fadeIn3s: "fadeIn 3s ease-in-out forwards", // 1-second fade-in animation
        fadeIn4s: "fadeIn 4s ease-in-out forwards", // 1-second fade-in animation
        fadeIn5s: "fadeIn 5s ease-in-out forwards", // 1-second fade-in animation
        fadeIn6s: "fadeIn 6s ease-in-out forwards", // 1-second fade-in animation
        fadeIn7s: "fadeIn 7s ease-in-out forwards", // 1-second fade-in animation
        fadeIn8s: "fadeIn 8s ease-in-out forwards", // 1-second fade-in animation
        slideDown: "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    plugins: [nextui()],
  },
  darkMode: "media",
};
