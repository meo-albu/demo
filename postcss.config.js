const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss('tailwind-default.config.js'),
    require('autoprefixer'),
    require('postcss-custom-properties')({
      preserve: false,
      importFrom: [
        './src/fullcalendar-vars.css'
      ]
    }),
    require('postcss-calc')
  ]
}