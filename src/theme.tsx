import { createTheme } from '@nextui-org/react';

export default createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '$red500',
      secondary: '$gray500',
      background: '#030b1f',
    },
    fonts: {
      sans: "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
    },
    fontSizes: {
      lg: '2rem',
    },
  },
});
