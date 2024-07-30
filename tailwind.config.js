/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        dark: "#09090b",
        lightdark: "#101013ee",
      },
      textColor: {
        gray: "#a1a1aa",
        white: "#fafafa",
      },
    },
  },
  plugins: [],
};
