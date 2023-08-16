/** @type {import('tailwindcss').Config} */

// const primaryGradient = {
//   'primary-500': '#8B6FFF',
// }

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-indigo-light': '#f7f8fe',
        'primary-indigo-dark': '#00056a',
        'primary-indigo': '#6E58F1',
        'primary-indigo-50': '#E9EBF9',
        'primary-indigo-medium': '#757ae9',
        'light-gray': '#EDEEF8',
        'dark-gray': '#333333',
        'extra-light': 'rgba(51, 51, 51, 0.1)',
        'dark-500': 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
