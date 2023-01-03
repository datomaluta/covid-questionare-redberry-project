/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#EAEAEA',
        'light-black': '#232323',
        'very-light-gray': '#626262',
        'link-color': '#1289AE',
        'light-blue': '#208298',
        'error-color': '#F15524',
        'disabled-btn': '#8D8D8D',
      },
      width: {
        'vaccination-form-width': '40.125rem',
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
        doctorStarAnimation: 'transitionStar 0.5s forwards',
        formWrapperAnimation: 'opacityTransition 0.5s forwards',
        heartAnimation: 'transitionHear 0.5s forwards',
        bigStarAnimation: 'movableBigStar 0.5s forwards',
        littleStarAnimation: 'movableLittleStar 0.5s forwards',
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
        transitionStar: {
          from: {
            top: '12.5rem',
            left: '3.5rem',
            opacity: 0,
          },
          to: {
            top: '-1rem',
            left: '2rem',
            opacity: 1,
          },
        },
        opacityTransition: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        transitionHear: {
          from: { opacity: 0, top: '-2rem', left: '-1rem' },
          to: { opacity: 1, top: '4rem', left: '6rem' },
        },
        movableBigStar: {
          from: { opacity: 0, top: '-2rem', left: '3rem' },
          to: { opacity: 1, top: '-4rem', left: '1.5rem' },
        },
        movableLittleStar: {
          from: { opacity: 0, bottom: '0', right: '4.5rem' },
          to: { opacity: 1, bottom: '-1.5rem', right: '3rem' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
