/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        navbarDown: {
          "0%": {
            opacity: 0,
            height: "0",
          },
          "100%": {
            opacity: 1,
            height: "250px",
          },
        },
        fade: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.2,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        navbarDown: "navbarDown 0.5s ease-out",
        fade: "fade 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
