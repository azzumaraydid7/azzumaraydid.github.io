const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
          'fade-in': {
              '0%': {
                  opacity: '0',
                  transform: 'translateX(-100%)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateX(0)'
              },
          },
          'fade-out': {
              '0%': {
                  opacity: '1',
                  transform: 'translateX(0px)'
              },
              '100%': {
                  opacity: '0',
                  transform: 'translateX(-100%)'
              },
          }
      },
      animation: {
          'fade-in': 'fade-in 0.5s ease-out',
          'fade-out': 'fade-out 0.5s forwards'
      },
      fontFamily: {
        'calligraffitti': ['calligraffitti', 'cursive'],
        'montserrat': ['montserrat'],
        'freightbiglight': ['freight'],
        'brandongrotesque': ['brandon grotesque'],
      },
      colors: {
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        blue: {
          pigment: '#3626a7',
          alice: '#f0f8ff',
          lightslate: '#deecff',
          lighterslate: '#f3f8ff',
          uthm: '#312783',
        },
        glaucous: '#657ed4',
        pink: {
          piggy: '#f5d7e3',
          champage: '#f5e4d7',
          mauvelous: '#f8a0a9',
          lightslate: '#e8d3ff',
        },
        purple: {
          pallete: '#c3aed6',
          lightslate: '#c6cfff',
        }
      },
      screens: {
        'iphoneSE': {'min': '320px'},
        'iphoneX': {'min': '375px'},
        'iphone678Plus': {'min': '414px'},
        'tablet': {'min': '640px'},
        'ipad': {'min': '768px'},
        'laptop': {'min': '1024px'},
        'desktop': {'min': '1280px'}
      },
      spacing: {
        '34rem': '34rem',
        '46.5': '13.3rem',
        '46': '13rem',
        '45.5': '12.8rem',
        '45': '11.8rem',
        '37': '10rem',
        '36': '9.6rem',
      },
      margin: {
        '-104': '-32rem',
        '-105': '-33rem',
        '-106': '-34rem',
        '-107': '-35rem',
        '-108': '-36rem',
        '-109': '-37rem',
        '-110': '-38rem',
        '-111': '-39rem',
        '-112': '-40rem',
      },
      inset: {
        '95': '23.5rem',
      },
      boxShadow: {
        'orange':'0 1px 3px 0 rgb(255 125 13 / 0%), 0px 10px 20px 0 rgb(255 118 0 / 36%)',
        'red':'0 1px 3px 0 rgb(255 0 0 / 0%), 0px 10px 20px 0 rgb(255 0 0 / 36%)',
      },
    },
  },
  variants: {
    extend: {
      flex: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      filter: ['hover', 'focus'],
      saturate: ['hover', 'focus'],
      hueRotate: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
