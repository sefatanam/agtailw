module.exports = {
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
