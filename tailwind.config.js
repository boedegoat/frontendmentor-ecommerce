const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Kumbh Sans', sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        app: {
          orange: 'hsl(26, 100%, 55%)',
          'pale-orange': 'hsl(25, 100%, 94%)',
          blue: {
            400: 'hsl(220, 13%, 13%)',
            300: 'hsl(219, 9%, 45%)',
            200: 'hsl(220, 14%, 75%)',
            100: 'hsl(223, 64%, 98%)',
          },
          'black-opacity-75': 'hsl(0, 0%, 0%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
