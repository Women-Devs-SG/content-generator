import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#0B6E4F',
          coral: '#CF5333',
          yellow: '#FFAE03',
          navy: '#05299E',
          offwhite: '#FFFBFF',
        },
      },
      container: { center: true, padding: '1rem' }
    },
  },
  plugins: [],
}
export default config
