/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#B0D7FA',
          300: '#76BAF6',
          500: '#459EED',
          700: '#2174BE',
          900: '#135895',
        },
        secondary: {
          100: '#C3F5FA',
          300: '#8AF6FF',
          500: '#3EE8F7',
          700: '#27CDDC',
          900: '#16ACB9',
        },
        neutral: {
          100: '#FCF9F6',
          300: '#C0BAB5',
          500: '#847F7A',
          600: '#4E4B48',
          700: '#393836',
          800: '#2F2E2D',
          900: '#282828',
        },
        confirm: {
          300: '#79D99F',
          500: '#61BE87',
          700: '#169D77',
        },
        warning: {
          300: '#FCB26D',
          500: '#F49F50',
          700: '#E97331',
        },
        error: {
          300: '#F87777',
          500: '#EF5A5A',
          700: '#D64545',
        },
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins:[]
}
