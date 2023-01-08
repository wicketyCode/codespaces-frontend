module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts}', './public/index.html'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1300px',
      'xl': '1600px',
      '2xl': '1800px',
    },
    fontFamily: {
      'amalia': ['AmaliaPro', 'serif'],
      'work-sans-light': ['WorkSans-Light', 'Work Sans Light'],
      'work-sans': ['WorkSans-Regular', 'Work Sans'],
      'work-sans-medium': ['WorkSans-Medium', 'Work Sans Medium'],
      'work-sans-bold': ['WorkSans-Bold', 'Work Sans Bold'],
    },
    extend: {
      screens: {
        '3xl': '2000px',
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        black: '#000000',
        white: '#FFFFFF',
        'grey-1': '#F9F9F9',
        'grey-2': '#EEEFF1',
        'grey-3': '#909090',
        'grey-4': '#E5E7EB',
        'skyblue-1': '#EBF6FC',
        'skyblue-2': '#D5EDFA',
        orange: '#ff9900',
        green: '#33cc33',
        red: '#e10e49',
        danger: '#C62828',
        warning: '#F9A825',
        success: '#558B2F',
        yellow: '#FCD900',
      },
    }
  },
};