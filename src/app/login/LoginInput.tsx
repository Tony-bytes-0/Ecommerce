import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Grid, InputAdornment, Typography } from "@mui/material";
//ICONS
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import Link from "next/link";

function LoginInput() {
  const imageUrl = 'url("/public/icons/dark-color-blurred-background.jpg")';
  return (
    <Grid
      container
      style={{
        backgroundImage: "url('/icons/dark-color-blurred-background.jpg')",
      }}
      /* style={{ backgroundImage: "url('/icons/dark-color-blurred-background.jpg')" }}  flex items-center justify-center shadow-lg h-auto w-screen p-2 */
      className="shadow-lg w-screen justify-center items-center flex"
    >
      <Grid
        item
        xs={6}
        className="flex flex-col items-center justify-center shadow-2xl p-20 bg-opacity-50 bg-white"
      >
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
          <Button
            variant="contained"
            color="primary"
            className="p-3.5 m-2 bg-blue-600"
            sx={{
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "#e64a19", // Custom hover background color
              },
            }}
          >
            Iniciar Sesión
          </Button>
          <Typography
            sx={{ display: "flex", alignItems: "flex-end" }}
            className="m-4 " color='primary'
          >
            <Link href="/">no tienes una cuenta? click aqui para registrarse</Link>
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
}

export default LoginInput;
