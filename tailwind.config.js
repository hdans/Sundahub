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
      xsm:'360px',
      sm:'480px',
      md:'768px',
      lg:'1024px',
      xl:'1200px',
    },
    fontFamily:{
      primary:'DM Serif Display',
      secondary:'Jost',
    },
    backgroundImage:{
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
          secondary: '#f4f0ec',
          hover: '#b88c5d',

        },
      },
    },
  },
  plugins: [],
}