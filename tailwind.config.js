/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,tsx}',
    './src/pages/components/**/*.{html,js,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image':
          "linear-gradient(87deg, rgba(2,0,36,0.8) 0%, rgba(23,23,40,0.8) 35%, rgba(20,56,64,0.8) 78%), url('../images/mountains-background.jpg')",
      },
      backgroundSize: {
        'hero-image': 'cover',
      },
      backgroundColor: {
        'nav-background': 'rgba(0, 0, 0, 0.61)'
      },
      backdropFilter: {
        'nav-background': 'blur(5px)'
      },
    },
  },
  plugins: [],
}
