module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'accent': '#4F7A32',
        'light': '#f4f4f4',
        'medium': '#EBE4D5',
        'darkcolor': '#3D3D3D'
       }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'accent': '#4F7A32',
        'darkaccent': '#042F31', 
        'darkgreen': '#042F31', 
        'light': '#f4f4f4',
        'medium': '#EBE4D5',
        'darkcolor': '#3D3D3D',
        'romeogray': '#8a8b8e',
        'logobg': '#f0f0f0'
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
