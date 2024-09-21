/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors:{
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'primaryColor':'',
      'secondaryColor':'',
      'btn-hover':'#0E0B9D',
      'link-a': "#3E3CB1",
      'checkbox-bg':'#EAF3EF',
      "check":'#2E865F',
      'btn-color':'#0A086E'

      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontSize:{

      }
    },
  },
  plugins: [],
}

