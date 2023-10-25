import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FEF9EF',
      'green': '#17C3B2',
      'gray': '#D9D9D9',
      'black': '#2b2b2b',
      'blue': '#227C9D',
      'red': '#FE6D73',
      'yellow': '#FFCB77',
      'gradA': '#227C9D',
      'gradB': '#17C3B2',
    },
  },
  plugins: [],
}


export default config
