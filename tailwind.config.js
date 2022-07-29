module.exports = {
  // mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hoverWhite: '#c9c5c3',
        buttonBG: '#6d6d6eb3',
        buttonBGHover: '#433e3a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
