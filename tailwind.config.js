module.exports = {
  module : {
    rules: [
      {
        test   : /\.scss$/,
        loader : 'postcss-loader',
        options: {
          ident  : 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer')
          ]
        }
      }
    ]
  },
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  }, // add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
