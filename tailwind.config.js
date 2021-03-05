const colors = require('tailwindcss/colors')

module.exports = {
  // purge: {
  //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  //   // safelist: ['^col\-end\-', '^row\-end\-']
  // },
  purge: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        button: {
          primary: {
            default: colors.blue[700],
            hover: colors.blue[600],
            focus: colors.blue[800],
            text: colors.white
          },
          secondary: {
            default: colors.green[700],
            hover: colors.green[600],
            focus: colors.green[800],
            text: colors.white
          },
          tertiary: {
            default: colors.yellow[700],
            hover: colors.yellow[600],
            focus: colors.yellow[800],
            text: colors.white
          },
          minimal: {
            default: colors.red[700],
            hover: colors.red[600],
            focus: colors.red[800],
            text: colors.white
          },
        },
        input: {
          background: colors.gray[50],
          disabled: colors.gray[100],
          dark: {
            background: colors.gray[600],
            disabled: colors.gray[500],
          }
        },
        current: colors.current,
        primary: colors.blue[700],
        secondary: colors.blue[200],
        tertiary: colors.blue[50],
        background: colors.white,
        hover: colors.gray[50],
        text: colors.gray[900],
        dark: {
          current: colors.white,
          primary: colors.blue[700],
          secondary: colors.blue[200],
          tertiary: colors.blue[50],
          background: colors.gray[800],
          hover: colors.gray[700],
          text: colors.gray[100]
        }
      },
      minWidth: {
        screen: '310px'
      },
      zIndex: {
       '100': 100,
       '101': 101, //drawer
       '-10': '-1',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even']
    },
  },
  plugins: [],
}
