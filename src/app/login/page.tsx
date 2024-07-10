"use client";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import Register from "./register/Register";
import Login from "./login/Login";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter()
  //const colors = getEnvColors();
  const mainGridStyles = {
    width: "100%",
    height: "120vh",
    display: "flex",
    backgroundImage: "linear-gradient(to bottom, #222239, #000000)",
        //overflowY: 'scroll'
  };
  const innerGrid = {
    background: "#282828",
    padding: 3,

  };
  const [login, setLogin] = useState(true);
  const handleLogin = () => {
    setLogin((login) => !login);
  };
  const redirect = (route: string) => {
    router.push(process.env.NEXT_PUBLIC_BASE_PATH + route)
  }
  return (
    <Grid
      container
      sx={mainGridStyles}
      display={"flex"}
      flexDirection={"column"}
      justifyItems={"center"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid container xs={6} sx={innerGrid}>
        {/* <Back action = {handleLogin} /> */}
        {login ? (
          <Login handler={handleLogin} redirect = {redirect } />
        ) : (
          <Register handler={handleLogin} />
        )}
      </Grid>
    </Grid>
  );
}

export default Page;
