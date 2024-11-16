/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "100%", // default breakpoint for small screens
          md: "1024px", // new breakpoint for medium screens
          lg: "1200px", // new breakpoint for large screens
          xl: "1400px", // new breakpoint for extra-large screens
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
