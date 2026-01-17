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
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px 2px currentColor' },
          '50%': { opacity: '0.7', boxShadow: '0 0 5px 1px currentColor' },
        }
      }
    },
  },
  plugins: [],
};