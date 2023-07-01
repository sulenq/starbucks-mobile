import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    // primary: '#036141',
    primary: {
      50: '#e6efec',
      100: '#b1cec4',
      200: '#8bb6a8',
      300: '#569580',
      400: '#358167',
      500: '#036141',
      600: '#03583b',
      700: '#02452e',
      800: '#023524',
      900: '#01291b',
    },
    voundation: {
      500: '#D9C897',
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#18191b' : 'white',
      },
    }),
  },
});
