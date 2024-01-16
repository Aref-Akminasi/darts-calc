/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dcred: '#d71731',
        dcgreen: '#1D953B',
        dcblue: '#189DFF',
        dcnavy: '#1F3B6A',
        dclightnavy: '#2E5698',
      },
    },
  },
  plugins: [],
};
