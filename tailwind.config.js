/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./pages/**/*.{html,js}"],
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
      backgrounColor:'#E5E5E5',
      loginBackground:'#FAFAFA',
    },
    borderRadius: {
      '15px': '15px',
    },
    extend: {
      dropShadow: {
        'xmd': '0 5px 10px rgba(0, 200, 83, 0.25)',
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
