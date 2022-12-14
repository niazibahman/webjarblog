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
      '34px': '34px',
    },
    
    borderRadius: {
      '15px': '15px',
    },
    extend: {
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
