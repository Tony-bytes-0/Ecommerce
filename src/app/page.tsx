
"use client"
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store'; // Asegúrate de que esta ruta sea correcta
import { useAppSelector } from '@/lib/hooks';
import { Button } from '@mui/material';

// Crea tu store aquí si prefieres hacerlo directamente en _app.js
// const store = makeStore();

function MyApp() {
  // Utiliza el mismo método para crear tu store que usaste en otros lugares
  const store = makeStore();
    const token = useAppSelector((state) => state.sesionToken)
  return (
    <Layout
      <Button sx={{padding: 40, margin: 40}} onClick={() => console.log(token)}> ver el token...
      </Button >
    
  );
}

export default MyApp;
