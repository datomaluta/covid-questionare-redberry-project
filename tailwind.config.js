/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#EAEAEA',
        'light-black': '#232323',
      },
      fontFamily: {
        contractica: 'TBC-Contractica-Bold-caps',
      },
      scale: {
        2.2: '2.2',
      },
      animation: {
        logoAnimation: 'makeLogoSmaller 0.5s ease-out forwards',
        textAnimation: 'appearTextWithDelay  1s forwards 1s',
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
      },
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke')()],
};
