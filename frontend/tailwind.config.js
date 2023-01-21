/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 3s ease-in-out',
        buttonFade: 'fadeButton 3s ease-in-out'
      },
      backgroundImage: {
        'home-image': "url('../pages/images/residence.jpeg')",
      },

      keyframes: theme => ({
        fadeIn: {
          '0%': { color: theme('colors.transparent'), backgroundColor: theme('color.transparent')},

          '100%' : {color: theme('black')}
        },

        fadeButton: {
          '0%': { color: theme('colors.transparent'), backgroundColor: theme('colors.transparent'), borderColor: theme('colors.transparent')},

          '100%' : {color: theme('black'), backgroundColor: theme('colors.blue.300'), borderColor: theme('colors.blue.400')}

        }


      }),
    },
  },
  plugins: [],
}
