/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(250, 245, 255)',
          100: 'rgb(243, 232, 255)',
          200: 'rgb(233, 213, 255)',
          300: 'rgb(216, 180, 254)',
          400: 'rgb(192, 132, 252)',
          500: 'rgb(168, 85, 247)',
          600: 'rgb(147, 51, 234)',
          700: 'rgb(126, 34, 206)',
          800: 'rgb(107, 33, 168)',
          900: 'rgb(88, 28, 135)',
          950: 'rgb(59, 7, 100)'
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
} 