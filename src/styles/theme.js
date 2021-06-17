import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Noto Sans JP',
    body: 'Noto Sans JP',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      }
    }
  }
});