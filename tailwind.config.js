// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {   
        montser: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
        },
    
   
    colors:{
      blue:"#0970CD",
      Secblue:"#0198E9",
      white: "#ffff",
      black38:"#383838",
      blackText: "#333333",
      lightText: "#29292E",
      red: "#FF5D5D"
 },
  },
  plugins: [],
}