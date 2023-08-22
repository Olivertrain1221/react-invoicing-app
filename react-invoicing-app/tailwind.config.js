/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '552px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightmodeBacking: '#141625',
        darkmodeBacking: '#FFFFFF',
        buttonPurple: '#7C5DFA',
        hoverPurple: '#9277FF',
        editlight: '#F9FAFE',
        editDark: '#252945',
        buttonHoverLight: '#DFE3FA',
        buttonGrey: '#373B53',
        buttonHover: '#0C0E16',
        redDelete: '#EC5757',
        redDeleteHover: '#9277FF',
        newitemDef: '#F8F8FB',
        greyText: '#7E88C3',
      },
      fontFamily: {
        serif: ['serif'],
      },
      fontSize: {
        '2xl': '12.5rem',
      },
      borderRadius: {
        'lg': '1.5rem'
      }
    },
  },
  plugins: [],
 }