// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'heading': ['Josefin Sans', 'sans-serif'],
      'body': ['Alata', 'sans-serif'],
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      gray: {
        dark: "hsl(0, 0%, 55%)",
        darker: "hsl(0, 0%, 41%)",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}