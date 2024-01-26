import plugin from 'tailwindcss/plugin';
import { designSystemVariables } from './supernovaTokens/tailwindVariables';
const pgTailwindConfig = {
  theme: {
    extend: {
      ...designSystemVariables,
    },
  },
};

module.exports = plugin(({ theme }) => {
  theme('colors', designSystemVariables.colors);
}, pgTailwindConfig);
