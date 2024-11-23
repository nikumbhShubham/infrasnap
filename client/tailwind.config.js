/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        generalsans: ['General Sans', 'sans-serif'],

      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
        softPink: '#FFC0CB',
        lavender: '#E6E6FA',
        mintGreen: '#98FF98',
        peach: '#FFDAB9',
        lightCoral: '#F08080',
        ivory: '#FFFFF0',
        silver: '#C0C0C0',
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        slideFromTop: "slideFromTop 0.7s ease-in-out",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideFromTop: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};