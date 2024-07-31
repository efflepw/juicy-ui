/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        light: "#8298B0",
        secondary: "#101013ee",
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
