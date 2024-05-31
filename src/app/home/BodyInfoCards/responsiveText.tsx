// theme.js
import { createTheme } from '@mui/material/styles';

const responsiveText = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h5:{
      fontSize: '1.3rem'
    },
    h6:{
      fontSize: '1rem',
    }
    // Define otros tamaños de fuente según sea necesario
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 100,
      md: 200,
      lg: 380,
      xl: 400,
    },
  },
});

export default responsiveText;