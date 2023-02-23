/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "linear-gradient(87deg, rgba(2,0,36,0.8) 0%, rgba(23,23,40,0.8) 35%, rgba(20,56,64,0.8) 78%), url('../images/mountains-background.jpg')"
      },
      backgroundSize: {
        'header-image': "cover"
      }
    },
  },
  plugins: [],
}
