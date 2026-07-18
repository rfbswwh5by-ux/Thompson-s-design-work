/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F4F7F2',
          100: '#E6EDE2',
          200: '#C9D8C1',
          300: '#9FBA91',
          400: '#6E9460',
          500: '#4D7440',
          600: '#3A5C2F',
          700: '#2A4522',
          800: '#1B3615',
          900: '#0F2009',
        },
        gold: {
          50: '#FDFBF2',
          100: '#FAF3D9',
          200: '#F4E7B0',
          300: '#ECD674',
          400: '#DCC04C',
          500: '#CCB039',
          600: '#B8932B',
          700: '#947222',
          800: '#6E5519',
          900: '#4A3A12',
        },
        cream: '#F5EBD0',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(27, 54, 21, 0.08)',
        medium: '0 12px 40px -8px rgba(27, 54, 21, 0.12)',
        large: '0 24px 60px -12px rgba(27, 54, 21, 0.18)',
        glow: '0 0 60px -10px rgba(204, 176, 57, 0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
