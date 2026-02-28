/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ebf6ff',
          100: '#d3ebff',
          200: '#a9d9ff',
          300: '#72c0ff',
          400: '#339fff',
          500: '#0a7dff',
          600: '#005fda',
          700: '#004cad',
          800: '#05428e',
          900: '#0b376f'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(10,125,255,0.35), 0 18px 60px rgba(10,125,255,0.28)'
      },
      backgroundImage: {
        radialLines:
          'radial-gradient(circle at 15% 20%, rgba(10,125,255,0.23), transparent 40%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.08), transparent 35%)'
      }
    }
  },
  plugins: []
};
