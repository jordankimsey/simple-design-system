/* eslint-disable no-undef */
import { tokens } from './src/components/supernovaTokens/tailwindVariables';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/preline/dist/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: tokens, // Add this line to extend tailwind theme with supernova design system tokens
  },
  plugins: [require('preline/plugin')],
};
