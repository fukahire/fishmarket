// /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",],
    theme: {
      extend: {
        keyframes: {
          horibounce: {
            '0%, 100%': {
              'transform': 'translateX(-25%)',
              'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
           },
            '50%': {
              'transform': 'translateX(0)',
              'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
            },
          }
        },
        transitionProperty: {
          'height': 'height'
        },
        fontFamily: {
          'sans': "'Noto Sans TC', sans-serif",
          'fakepearl':"'FakePearl-Regular', sans-serif",
        },
        colors: {
          'mainyellow':'#FFCD40',
          'subyellow': '#FAF3DB',
          'subpurple': '#6b21a8',
          'mainblue': '#2E4187',
          'txtc': '#475569',
        },
      },
    },
    plugins: [],
  }
  