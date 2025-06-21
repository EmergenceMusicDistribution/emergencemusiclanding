/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },   
    //  container : {
    //   center : true,
    //   screens:{
    //     lg: "1024px",
    //     xl:"1024px"
    //   }
    // },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #212129, #3e2b47 50%, #35222d)',
      },
    screens: {
      'sm': {'min': '320px', 'max': '599px'},
    
      'md': {'min': '600px', 'max': '1023px'},
    
      'lg': {'min': '1024px', 'max': '1581px'},
    
      'xl': {'min': '1280px', 'max': '1535px'},
    
      '2xl': {'min': '1536px'},
    },
  
  },
  },
  plugins: [],
}