import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f6',
          100: '#f3efe9',
          200: '#e5ddd2',
          300: '#d4c7b5',
          400: '#bfa894',
          500: '#8B7355',
          600: '#7a6349',
          700: '#65523d',
          800: '#544436',
          900: '#483c30',
        },
        accent: {
          rose: '#C9A9A6',
          mauve: '#B89F9F',
          cream: '#F5F1ED',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
