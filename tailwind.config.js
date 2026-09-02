/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FFE600',
          500: '#F5EE0A',
          600: '#EAB308',
        },
        gold: {
          DEFAULT: '#FFE500',
          light: '#FFF066',
          dark: '#CCA700',
          neon: '#FAFF00',
        },
        obsidian: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#0F0F0F',
          800: '#141414',
          700: '#1C1C1C',
          600: '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-yellow': '0 0 25px -5px rgba(255, 230, 0, 0.45), 0 0 10px -5px rgba(255, 230, 0, 0.25)',
        'neon-yellow-lg': '0 0 50px -10px rgba(255, 230, 0, 0.5), 0 0 20px -5px rgba(255, 230, 0, 0.3)',
        'neon-yellow-xl': '0 0 80px -15px rgba(255, 230, 0, 0.6), 0 0 30px -5px rgba(255, 230, 0, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(255, 230, 0, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(255,230,0,0.3))' },
          '100%': { filter: 'drop-shadow(0 0 35px rgba(255,230,0,0.75))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
