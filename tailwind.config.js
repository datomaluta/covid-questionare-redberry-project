/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#EAEAEA',
        'light-black': '#232323',
        'very-light-gray': '#626262',
      },
      fontFamily: {
        contractica: 'TBC-Contractica-Bold-caps',
        Anonymous: 'Anonymous Pro',
        HelveticaNeueBold: 'HelveticaNeueLT-Bold',
        HelveticaNeueThin: 'HelveticaNeueLT-Thin',
      },
      scale: {
        2.2: '2.2',
      },
      animation: {
        logoAnimation: 'makeLogoSmaller 0.5s ease-out forwards',
        textAnimation: 'appearTextWithDelay  1s forwards 1s',
        identificationAnimation: 'transitionBlock 0.5s forwards',
        covidQuestionsAnimation: 'transitionCircle 0.5s forwards',
      },
      keyframes: {
        makeLogoSmaller: {
          from: { transform: 'scale(38)' },
          to: { transform: 'scale(1)' },
        },
        appearTextWithDelay: {
          from: { opacity: 0, transform: 'translateY(-80px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        transitionBlock: {
          from: {
            top: '13rem',
            left: '40%',
            opacity: 0,
          },
          to: {
            top: '11rem',
            left: '50%',
            opacity: 1,
          },
        },
        transitionCircle: {
          from: {
            top: '11rem',
            left: '40%',
            opacity: 0,
          },
          to: {
            top: '14.5rem',
            left: '7.5rem',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke')()],
};
