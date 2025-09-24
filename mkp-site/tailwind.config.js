/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        codGray: '#151213',
        doubleSpanishWhite: '#e9d5bf',
        scorpion: '#616061',
        quillGray: '#d1d1cd',
        thunder: '#1e1c1d',
        abbey: '#4f5456',
        cello: '#20315b',
        osloGray: '#8b8c8d',
        capeCod: '#323534',
        fuelYellow: '#f09e2c'
      },
      fontFamily: {
        heading: ['"R Spectr"', 'sans-serif'],
        body: ['"transducer"', 'sans-serif'],
        'body-condensed': ['"transducer-condensed"', 'sans-serif'],
        'body-extended': ['"transducer-extended"', 'sans-serif'],
        brand: ['"ethnocentric"', 'sans-serif'],
        tech: ['"mono45-headline"', 'monospace']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '3rem'
        }
      }
    }
  },
  plugins: [
  ]
};


