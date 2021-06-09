module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'accent': '#4F7A32',
        'light': '#f4f4f4',
        'medium': '#EBE4D5',
        'darkcolor': '#3D3D3D'
       }),
       textColor: theme => ({
        ...theme('colors'),
        'accent': '#4F7A32',
        'light': '#f4f4f4',
        'medium': '#EBE4D5',
        'darkcolor': '#3D3D3D'
       }),
      fontFamily: {
        'P22Underground-light': ['"P22Underground-light"'],
        'P22Underground-book': ['"P22Underground-Book"'],
        'P22Underground-ltp': ['"P22Underground-LtP"'],
        'P22Underground-thin': ['"P22Underground-Thin"'],
        'P22Underground-thp': ['"P22Underground-ThP"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
