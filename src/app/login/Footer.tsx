import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = (props: { primaryColor: string, secundaryColor: string, name: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        width:'100%',
        height:'15vh',
        //flexGrow: 1,
        backgroundColor: props.secundaryColor, // Usa el color principal del tema
        color: "black", // Color del texto
      }}
    >
      <Typography variant="body2" fontSize={20}>
        &copy; {new Date().getFullYear()} {props.name}. Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
