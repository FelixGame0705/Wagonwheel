import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{html,js,jsx,ts,tsx}',
    './src/components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'dela-gothic': ['"Dela Gothic One"', 'sans-serif'], 
        'italiana': ['Italiana', 'serif'],
        'inter': ['Inter', 'serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config

