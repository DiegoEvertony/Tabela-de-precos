/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '970px',
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgb(29 78 216) 50%, white 50%)',
      },

      fontFamily: {
        sans: ["Open Sans", "sans-serif"]
      }
    }
  },
  plugins: [],
}

