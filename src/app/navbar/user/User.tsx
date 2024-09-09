import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DropdownMenu from "@/app/components/DropdownMenu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setToken, setUser } from "@/lib/token/sesionToken";
import { logoutConfirm } from "@/app/components/modalAlerts";
import {
  adminEmail,
  adminPassword,
  dinamicLogin,
  evaluateRoleLoginAction,
} from "@/app/login/login/communFunctions";
import { LoginPromiseToken, UserToken } from "@/app/types/userSesionToken";
import DropdownMenuComponent from "@/app/components/DropdownMenu";
import { expireSesion, setNewSession } from "@/app/login/login/localUserData";

type UserTypes = {
  size: number;
  windowSize: { width: number; height: number };
  handleNavigate: (arg0: string) => void;
  sesionToken: UserToken | undefined;
  logout: () => void;
};

const User: React.FC<UserTypes> = ({
  size,
  windowSize,
  handleNavigate,
  sesionToken,
  logout,
}) => {
  const dispatch = useAppDispatch();
  const handleLoggout = () => {
    logoutConfirm(() => {
      logout();
      expireSesion();
    });
  };

  const userOptions = [
    //{ id: 0, label: "Panel de usuario", function: handleLoggout },
    { id: 4, label: "Cerrar sesion", function: handleLoggout },
  ];
  const logOptions = [
    {
      id: 1,
      label: "Ingresar",
      function: () =>
        handleNavigate(process.env.NEXT_PUBLIC_BASE_PATH + "/login"),
    },
    {
      id: 3,
      label: "AUTOLOG con admin",
      function: async () => {
        const localResponse = await dinamicLogin(adminEmail, adminPassword);
        const loginResult: LoginPromiseToken = localResponse;
        dispatch(setToken(loginResult.data.token));
        dispatch(setUser(loginResult.data.user));
        handleNavigate(evaluateRoleLoginAction(loginResult.data.user.role));
        setNewSession(loginResult.data.user, loginResult.data.token);
      },
    }, //debug
  ];

  const getName = () => {
    console.log('esto esta en el state? ', sesionToken)
    if (sesionToken?.user?.person?.fullName) {
      return sesionToken?.user.person.fullName;
    }
  };
  const getOptions = () => {
    console.log(sesionToken)
    if (sesionToken?.token == '' || !sesionToken?.token) {
      return logOptions
    }
    else {
      return userOptions
    }
  }

  return (
    <>
      {/*         //vista desktop
        //windowSize.width >= 800 ? ( */}
      <Grid container item xs={size}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="caption">
            {getName()}
          </Typography>
        </Grid>
        <DropdownMenuComponent
          options={userOptions.concat(logOptions)} //todas las opciones
          //options = {getOptions()}
        />
      </Grid>
      {/*         //) : (
          //vista movil
          <Grid container xs={size} paddingLeft={2}>

          </Grid>
        //)} */}
    </>
  );
};

export default User;
