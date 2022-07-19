/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'sidebar-color': 'rgba(255, 255, 255, 0.5)',
        'dashboard-color': '#F2F2F2',
        'color-adventures': '#F9F9F9',
        'color-button': '#5D11BD',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'items-gray': '#A6AABF', //Items sidebar
        'items-purple': '#373B5C', //Items sidebar
        'title-adventure': '#5365F8',
        'text-adventures': '#5B5E6F',
        'button-light-gray': '#F7F7F7',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
}
