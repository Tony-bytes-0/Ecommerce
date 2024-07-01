import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';

const SlideExample: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ p: 2, height: 100, overflow: 'hidden' }}>
{/*       <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Mostrar desde el objetivo"
      /> */}
      <Slide in={checked} /* container={null} */>
        <input type="text" placeholder="Escribe algo aquí..." />
      </Slide>
    </Box>
  );
};

export default SlideExample