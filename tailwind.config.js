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
        glitch1: 'glitch1 2.5s infinite',
        glitch2: 'glitch2 2.5s infinite',
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
        glitch1: {
          '0%': { transform: 'none' },
          '7%': { transform: 'skew(-0.5deg)' },
          '10%': { transform: 'none' },
          '27%': { transform: 'none' },
          '30%': { transform: 'skew(0.5deg)' },
          '35%': { transform: 'none' },
          '52%': { transform: 'none' },
          '55%': { transform: 'skew(-1deg)' },
          '50%': { transform: 'none' },
          '72%': { transform: 'none' },
          '75%': { transform: 'skew(1deg)' },
          '80%': { transform: 'none' },
          '100%': { transform: 'none' },
        },
        glitch2: {
          '0%': { transform: 'none' },
          '7%': { transform: 'skew(0.5deg)' },
          '10%': { transform: 'none' },
          '27%': { transform: 'none' },
          '30%': { transform: 'skew(-0.5deg)' },
          '35%': { transform: 'none' },
          '52%': { transform: 'none' },
          '55%': { transform: 'skew(1deg)' },
          '50%': { transform: 'none' },
          '72%': { transform: 'none' },
          '75%': { transform: 'skew(-1deg)' },
          '80%': { transform: 'none' },
          '100%': { transform: 'none' },
        },
      },
    },





  },
  plugins: [],
}

