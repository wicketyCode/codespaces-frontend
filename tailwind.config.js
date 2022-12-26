const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts}', './public/index.html', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      extend: {
        // Adds a new breakpoint in addition to the default breakpoints
        screens: {
          '3xl': '1600px',
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')],
};