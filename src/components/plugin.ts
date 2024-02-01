import plugin from 'tailwindcss/plugin';

import { tokens } from '../../supernovaTokens/tailwindVariables';
const pgTailwindConfig = {
  theme: {
    extend: {
      ...tokens,
    },
  },
};

module.exports = plugin(({ theme }) => {
  theme('colors', tokens.colors);
}, pgTailwindConfig);
