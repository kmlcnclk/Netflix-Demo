import { extendTheme } from '@chakra-ui/react';
// import { ButtonStyles as Button } from '../styles/components/ButtonStyles';
// import { Card, Menu } from './card';
const colors = {
  primary: '#845EC2',
  secondary: '#FF6F91',
  highlight: '#00C9A7',
  warning: '#FFC75F',
  danger: '#C34A36',
  customRed: '#E53E3E',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// const components = {
// Button,
// Card,
// Menu,
// };
export const theme = extendTheme({ colors, config });
