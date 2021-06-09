module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'accent': '#042F31',
        'light': '#f4f4f4',
        'medium': '#EBE4D5',
       }),
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
