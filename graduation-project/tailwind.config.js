/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/auth/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#4375FF",
          DEFAULT: "#0044FF",
          dark: "#002a9d",
        },
        gray: {
          dark: "#707070",
          DEFAULT: "#00000029", // better to be hexadecimal
          light: "#F3F4F6",
        },
        red: {
          DEFAULT: "#EE404C",
        },
      },
    },
  },
  plugins: [require("flowbite")],
};
