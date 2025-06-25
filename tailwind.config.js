/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        script: ['Great Vibes', 'cursive'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
