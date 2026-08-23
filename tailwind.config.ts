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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        scaleIn: 'scaleIn 1s ease-out',
        slideInLeft1: 'slideInLeft 0.5s ease-out',
        slideInLeft2: 'slideInLeft 0.7s ease-out',
        slideInLeft3: 'slideInLeft 0.9s ease-out',
        slideInLeft4: 'slideInLeft 1s ease-out',
        slideInUp1: 'slideInUp 0.5s ease-out',
        slideInUp2: 'slideInUp 0.6s ease-out 0.1s both',
        slideInUp3: 'slideInUp 0.6s ease-out 0.2s both',
        slideInUp4: 'slideInUp 0.6s ease-out 0.3s both',
        slideInUp5: 'slideInUp 0.6s ease-out 0.4s both',
        slideInRight1: 'slideInRight 0.6s ease-out 0.2s both',
        fadeIn1: 'fadeIn 0.6s ease-out both',
        fadeIn2: 'fadeIn 0.6s ease-out 0.15s both',
        fadeIn3: 'fadeIn 0.6s ease-out 0.3s both',
        fadeIn4: 'fadeIn 0.6s ease-out 0.45s both',
      },
    },
  },
  plugins: [],
};
export default config;
