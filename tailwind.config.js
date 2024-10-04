/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //dark mode with tailwind
  darkMode: 'class',
  theme: {

    extend: {
      // backgroundImage:{
      //   "bg-img": "url{assets/img/bg.png}",
      // },
      backgroundImage: {
        "bg-img": "url('assets/img/bg.png')",
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        'primaryColor': '',
        'secondaryColor': '',
        'btn-hover': '#0E0B9D',
        'link-a': "#3E3CB1",
        'checkbox-bg': '#EAF3EF',
        "check": '#2E865F',
        'btn-color': '#0A086E'

      },
      progress: {
        custom: {
          '&::-webkit-progress-bar': {
            rounded: 'full',
            margin: '2px',
          },
          '&::-webkit-progress-value': {
            rounded: 'lg',
          },
          '&::-webkit-progress-bar': {
            backgroundColor: 'slate-100',
          },
          '&::-webkit-progress-value': {
            backgroundColor: 'violet-400',
          },
          '&::-moz-progress-bar': {
            backgroundColor: 'green-400',
          },
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontSize: {

      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
        'zoom-in': 'zoom-in 0.5s ease-in-out',
        'zoom-out': 'zoom-out 0.5s ease-in-out',
        'fade-right': 'fade-right 1s ease-in-out',
        'fade-left': 'fade-left 1s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'fade-out': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        'zoom-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.8)' },
        },
        'fade-right': {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-left': {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}

