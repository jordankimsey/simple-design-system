/* eslint-disable no-undef */
import { designSystemVariables } from './supernova/tailwind-variables';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/preline/dist/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: designSystemVariables, // Add this line to extend tailwind theme with your design system
  },
  plugins: [require('preline/plugin')],
};
