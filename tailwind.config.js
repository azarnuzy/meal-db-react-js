/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F4D8D2',
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
