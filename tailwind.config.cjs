/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.{html,js}',
    './scripts/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
