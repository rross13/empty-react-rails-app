const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: {
        '50': colors.red['50'],
        '100': colors.red['100'],
        '200': colors.red['200'],
        '300': colors.red['300'],
        '400': colors.red['400'],
        '500': colors.red['500'],
        '600': colors.red['600'],
        '700': colors.red['700'],
        '800': colors.red['800'],
        '900': colors.red['900'],
        DEFAULT: '#de4e57',
      },
      green: {
        '50': colors.emerald['50'],
        '100': colors.emerald['100'],
        '200': colors.emerald['200'],
        '300': colors.emerald['300'],
        '400': colors.emerald['400'],
        '500': colors.emerald['500'],
        '600': colors.emerald['600'],
        '700': colors.emerald['700'],
        '800': colors.emerald['800'],
        '900': colors.emerald['900'],
        DEFAULT: '#34c1c1',
      },
      slate: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      yellow: colors.amber,
      blue: colors.blue,
      violet: colors.violet,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        'sm': '551px',
        // => @media (min-width: 640px) { ... }

        'md': '675px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px', // laptop
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px', // desktop
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
