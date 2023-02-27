/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // hero: "url('./src/assets/Front-main-wallpaper.webp')",
        hero: "url('./assets/Front-main-wallpaper.webp')",
      },
    },
  },
  plugins: [],
};
