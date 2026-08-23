import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--bg-button-hover)',
        bg_primary: 'var(--bg-primary)',
        bg_secondary: 'var(--bg-secondary)',
        bg_tertiary: 'var(--bg-tertiary)',
        button_hover: 'var(--bg-button-hover)',
        bg_hover: 'var(--bg-hover)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        scaleIn: 'scaleIn 1s ease-out',
        slideInLeft1: 'slideInLeft 0.5s ease-out',
        slideInLeft2: 'slideInLeft 0.7s ease-out',
        slideInLeft3: 'slideInLeft 0.9s ease-out',
        slideInLeft4: 'slideInLeft 1s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
