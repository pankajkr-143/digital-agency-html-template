/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neo-black': '#0f172a',
        'neo-dark': '#1e293b',
        'neo-green': {
          100: '#3b82f6',
          200: '#2563eb',
          300: '#1d4ed8',
        },
        'neo-blue': {
          100: '#60a5fa',
          200: '#3b82f6',
          300: '#2563eb',
        },
        'neo-purple': {
          100: '#6366f1',
          200: '#4f46e5',
          300: '#4338ca',
        },
      },
      fontFamily: {
        'vt323': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        'code': ['ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #132b2f 1px, transparent 1px), linear-gradient(to bottom, #132b2f 1px, transparent 1px)',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'flicker': 'flicker 2s linear infinite',
        'code-rain': 'code-rain 20s linear infinite',
        'matrix': 'matrix 25s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
        },
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        'code-rain': {
          '0%': { transform: 'translateY(-1000px)' },
          '100%': { transform: 'translateY(1000px)' },
        },
        'matrix': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px 2px currentColor' },
          '50%': { opacity: '0.7', boxShadow: '0 0 5px 1px currentColor' },
        }
      }
    },
  },
  plugins: [],
};