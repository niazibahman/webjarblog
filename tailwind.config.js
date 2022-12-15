/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./pages/**/*.{html,js}","./component/**/*.{html,js}"],
  theme: {
    colors:{
      gray:colors.gray,
      black:colors.black,
      white:colors.white,
      greenAccent:'#00C853',
      buttomBorder:'#00712F',
      red:'#FE5656',
      black37:'#373737',
      grayText:'#7B7B7B',
      loginBackground:'#FAFAFA',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '34px': '34px',
    },
    
    borderRadius: {
      '15px': '15px',
    },
    extend: {
      zIndex: {
        '7000': '7000',
        '7100':'7100',
        '7200':'7200'
      },
      dropShadow: {
        'xmd': '0 5px 10px rgba(0, 200, 83, 0.25)',
        'header':'0px 0px 40px rgba(0, 0, 0, 0.05)',
        'search':'0px 0px 10px rgba(0,0,0,0.1)',
      },
      fontFamily: {
        yekanSmall: ["iranyekanSmall"],
        yekan: ["iranyekan"],
        yekanRegular: ["iranyekanRegular"],
        yekanBold: ["iranyekanBold"],
        yekanUltraBold: ["iranyekanUltraBold"],
      },
    },
  },
  plugins: [],
}
