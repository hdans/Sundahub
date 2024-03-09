/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    container:{
      padding: {
        DEFAULT: '15px',
      },
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
    },
    fontFamily:{
      primary:'DM Serif Display',
      secondary:'Jost',
    },
    backgroundImage:{
      hero: 'linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(/assets/assets/hero/lises-bg.jpg)',
      grid: 'url(/assets/assets/grid.png)',
    },
    extend: {
      colors:{
        primary:{
          DEFAULT: '#292f36',
          hover: '#343e4a'
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          // #803300' 
          secondary: '#f4f0ec',
          // #d4b781''
          hover: '#b88c5d',
          // #501100

        },
      },
    },
  },
  plugins: [],
}

