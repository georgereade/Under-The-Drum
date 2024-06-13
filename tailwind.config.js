/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    plugins: [],
  },
};
