/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      screens: {
        'xsm': '320px', // min-width 
      },

      fontSize: {
        '10xl': '10rem',
      },


      animation: {
        shine: "shine 3s infinite",

        marquee: "marquee 50s linear infinite",
      
      },
      keyframes: {
        shine: {
          "100%": { left: "100%" },
        },

        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
       
      },
    },





  },
  plugins: [],
}

