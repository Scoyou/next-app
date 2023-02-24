/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}",
    "./src/pages/components/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-dark":
          "linear-gradient(87deg, rgba(2,0,36,0.8) 0%, rgba(23,23,40,0.8) 35%, rgba(20,56,64,0.8) 78%), url('../images/night-mountains.jpg')",
        "hero-image-light":
          "linear-gradient(87deg, rgba(2,0,36,0.8) 0%, rgba(23,23,40,0.8) 35%, rgba(20,56,64,0.8) 78%), url('../images/day-mountains.jpg')",
      },
      backgroundSize: {
        "hero-image-dark": "cover",
        "hero-image-light": "cover",
      },
      backgroundColor: {
        "nav-background-dark": "rgba(0, 0, 0, 0.61)",
      },
      backdropFilter: {
        "nav-background": "blur(5px)",
      },
    },
  },
  plugins: [],

  darkMode: "class",
};
