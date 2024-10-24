import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/feature/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        DEFAULT: '#2A3039',
        primary: {
          DEFAULT: '#434FBA',
          600: '#363F95'
        }
      },
      borderRadius: {
        DEFAULT: '8px'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: ['10px', '14px'],
        sm: ['12px', '16px'],
        DEFAULT: ['14px', '18px'],
        lg: ['16px', '20px'],
        code: ['18px', '26px'],
        title: ['20px', '26px']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
export default config
