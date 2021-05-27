/* eslint-disable global-require */
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true, // without this, it purges all of my CSS D:
    layers: ['components', 'pages'],
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: {
        deep: [/prose$/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Defaults
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.green,
      blue: colors.blue,
      // Custom Colors
      // Taken from Valspar and Coolors.co and mixed them around
      // Greens
      'vegas-green': '#407148',
      wilderness: '#476151',
      'dark-wilderness': '#2b4f39',
      'dark-spring-green': '#157145',
      'forest-green-crayola': '#57A773',
      'prickly-pear': '#798B74',
      'pistachio-ice-green': '#abc6a7',
      'ballroom-dancing': '#A9B4A5',
      'lazy-days': '#D0E4D8',
      'mint-hint': '#DFF2E1',
      // Yellows
      beehive: '#F9CC7F',
      corn: '#f4e666',
      'laser-lemon': '#f7fe72',
      // Blues
      'quarry-pond': '#436379',
      'carolina-skies': '#B2CAD4',
    },
    extend: {
      // tailwind-typography settings (unused at the moment)
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
