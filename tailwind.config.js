/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#0D9488',
        accent: '#F59E0B',
        rose: '#F43F5E',
        surface: {
          light: '#FAFAFA',
          dark: '#0A0A0F',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"DM Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-light': 'radial-gradient(at 40% 20%, #ede9fe 0px, transparent 50%), radial-gradient(at 80% 0%, #ccfbf1 0px, transparent 50%), radial-gradient(at 0% 50%, #fef3c7 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, #1e1b4b 0px, transparent 50%), radial-gradient(at 80% 0%, #042f2e 0px, transparent 50%), radial-gradient(at 0% 50%, #1c1917 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
