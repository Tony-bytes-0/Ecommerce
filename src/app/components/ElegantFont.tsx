import React from 'react';
import Typography from '@mui/material/Typography';

const ElegantFont:React.FC<{children: string, textColor: string}> = ({ children, textColor }) => {
  return (
<Typography variant="h4" align="center" sx={{
    fontFamily: 'cursive', // Puedes cambiar 'Roboto Slab' por cualquier otra fuente que prefieras
    fontWeight: 'bold',
    marginBottom: 2,
    color: textColor , // Opcional: ajusta el color según tus preferencias
  }}>
    {children}
  </Typography>
  );
};

export default ElegantFont;




