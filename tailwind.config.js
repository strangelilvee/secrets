/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        handjet: ['Handjet', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};