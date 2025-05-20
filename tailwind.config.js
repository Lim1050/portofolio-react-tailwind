/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      // Colors used in the project
      colors: {
        primary: "#0F9DF8",
        background: "#040B1C",
        cardbg: "#061840",
        white: "#FBFBFB",

        navbg: "#0A214E",

        overlayBg: "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
