/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0287a8",
        secondary: "#00c3c7",
        accent: "#e0e6ed",
      },
      container: {
        center: true,
      padding:{
        center: true,
        default: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
