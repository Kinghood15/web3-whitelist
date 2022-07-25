/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'smallMobile': '260px',
      'mobile': '360px',
      'bigMobile':'460px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontSize:{
      '10px':'10px',
      '11px':'11px',
      '9px':'9px',
      '8px':'8px',
      '7px':'7px',
      '6px':'6px',
      '5px':'5px',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
    },
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        '50px':'50px',
        '60px':'60px',
        '70px':'70px',
        '80px':'80px',
        '90px':'90px',
        '100px':'100px',
        '110px':'110px',
        '120px':'120px',
        '130px':'130px',
        '140px':'140px',
      },
      inset: {
        '95%': '95%',
        '90%': '90%',
        '80%': '80%',
        '75%': '75%',
        '70%': '70%',
        '65%': '65%',
        '60%': '60%',
        '55%': '55%',
        '50%': '50%',
        '45%': '45%',
        '40%': '40%',
        '35%': '35%',
        '30%': '30%',
        '20%':'20%'
      },
      height: {
        '95vh': '95vh',
        '90vh': '90vh',
        '80vh': '80vh',
        '75vh': '75vh',
        '70vh': '70vh',
        '65vh': '65vh',
        '60vh': '60vh',
        '55vh': '55vh',
        '95%': '95%',
        '90%': '90%',
        '80%': '80%',
        '75%': '75%',
        '70%': '70%',
        '65%': '65%',
        '60%': '60%',
        '55%': '55%',
        '50%': '50%',
        '45%': '45%',
        '40%': '40%',
        '35%': '35%',
        '30%': '30%',
        '20%':'20%'
      },
      width: {
        '100vw':'100vw',
        '95vw': '95vw',
        '90vw': '90vw',
        '80vw': '80vw',
        '75vw': '75vw',
        '70vw': '70vw',
        '65vw': '65vw',
        '60vw': '60vw',
        '55vw': '55vw',
        '50vw': '50vw',
        '45vw': '45vw',
        '40vw': '40vw',
        '35vw': '35vw',
        '30vw': '30vw',
        '95%': '95%',
        '90%': '90%',
        '80%': '80%',
        '85%': '85%',
        '75%': '75%',
        '70%': '70%',
        '65%': '65%',
        '60%': '60%',
        '55%': '55%',
        '50%': '50%',
        '45%': '45%',
        '40%': '40%',
        '35%': '35%',
        '30%': '30%',
        '20%':'20%'
      }

    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })

    })
  ]
}