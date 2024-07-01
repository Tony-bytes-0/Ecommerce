import React from "react";
import TextField from "@mui/material/TextField";
import { Grid, InputAdornment, Typography } from "@mui/material";
import { getEnvColors, globalStyle } from "@/app/types/common";
//ICONS
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import Link from "next/link";

type loginInput = {
  email: string;
  handleEmail: Function;
  password: string;
  handlePassword: Function;
};
const LoginInput: React.FC<loginInput> = ({
  email,
  handleEmail,
  password,
  handlePassword,
}) => {
  return (
    <Grid item xs={12} padding={6}>
      <Typography
        style={globalStyle}
        textAlign={"center"}
        sx={{ color: "#FFFFFF" }}
        fontSize={35}
        padding={5}
      >
        {" "}
        <b>Bienvenido a Ecommerce</b>
      </Typography>
      <form noValidate autoComplete="off">
      <Typography style={globalStyle} sx={{ color: "#FFFFFF" }} fontSize={15}>
          Correo electrónico
        </Typography>
        <TextField
          className="bg-white"
          size="small"
          variant="filled"
          value={email}
          onChange={handleEmail as () => void}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"><AccountBoxIcon /></InputAdornment>
            ),
          }}
        />
        <Typography style={globalStyle} sx={{ color: "#FFFFFF" }} fontSize={15}>
          contraseña
        </Typography>
        <TextField
          className="bg-white"
          size="small"
          type="password"
          variant="filled"
          value={password}
          onChange={handlePassword as () => void}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start"><KeyIcon /></InputAdornment>
            ),
          }}
        />
      </form>
      <Link href={"recoverPassword"}>
        <Typography sx={{ color: "#54ACFF" }}>
          Olvidaste tu contraseña?
        </Typography>
      </Link>
    </Grid>
  );
};

export default LoginInput;
