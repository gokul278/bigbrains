/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        bebas:["Bebas Neue", "sans-serif"],
        outfit:["Outfit", "sans-serif"]
      },
    },
  },
  plugins: [],
};
