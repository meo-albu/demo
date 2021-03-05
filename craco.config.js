module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer')(),
        require('postcss-custom-properties')({
          preserve: false,
          importFrom: [
            'src/fullcalendar-vars.css'
          ]
        }),
        // require('postcss-calc')
      ],
    },
  },
}