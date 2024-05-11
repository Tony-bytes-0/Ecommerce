import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Grid, IconButton, InputAdornment } from "@mui/material";
//ICONS
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import LoginIcon from "@mui/icons-material/Login";
import Header from "./Header";

const mainStyles = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: 5,
  justifyContent: "center",
  alignItems: "center",
};


const LoginInput = (props: {
  primaryColor: string;
  secundaryColor: string;
  defaultColor: string;
  borderBox: object;
}) => {
  const buttonStyles = {
    padding: 4,
    "&:hover": {
      backgroundColor: props.primaryColor, // Custom hover background color
    },
  };
  return (
    <Grid item xs={6}>
      <Box sx={mainStyles}>
      <Header
        primaryColor={props.primaryColor}
        secundaryColor={props.secundaryColor}
        defaultColor={props.secundaryColor}
        borderBox={props.borderBox}
      />
      <form noValidate autoComplete="off">
        <TextField
          className="bg-white"
          label="Correo o nombre de usuario"
          variant="filled"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="bg-white"
          label="Contraseña"
          type="password"
          variant="filled"
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:"100%",
          }}
        >
          <IconButton
            sx={buttonStyles}
          >
            <LoginIcon />
            Ingresar
          </IconButton>
        </Box>
      </form>
      </Box>
    </Grid>
  );
};

export default LoginInput;
