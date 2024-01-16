import { designSystemVariables } from './supernova/tailwind-variables';
/** @type {import('tailwindcss').Config} */
export default {
  //'./node_modules/preline/preline.js'
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: designSystemVariables, // Add this line to extend tailwind theme with your design system
  },
  plugins: [],
};
