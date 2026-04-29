/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        /* warm grey system */
        canvas:  '#F4F3F0',
        paper:   '#FAFAF9',
        border:  '#E2E0DA',
        muted:   '#9A9690',
        ink:     '#1A1916',
        /* orange accent */
        orange: {
          50:  '#FFF4ED',
          100: '#FFE6D0',
          200: '#FFC89A',
          300: '#FFA15C',
          400: '#FF7A2B',
          500: '#F95E0A',
          600: '#E04400',
          700: '#B73500',
          800: '#8F2A00',
          900: '#6E2200',
        },
      },
      keyframes: {
        rise: { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' }},
      },
      animation: {
        'rise':   'rise 0.5s cubic-bezier(.16,1,.3,1) both',
        'rise-1': 'rise 0.5s cubic-bezier(.16,1,.3,1) 0.08s both',
        'rise-2': 'rise 0.5s cubic-bezier(.16,1,.3,1) 0.18s both',
        'rise-3': 'rise 0.5s cubic-bezier(.16,1,.3,1) 0.28s both',
      },
    },
  },
  plugins: [],
};
