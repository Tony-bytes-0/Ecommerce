import { Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import DropdownMenu from "@/app/components/DropdownMenu";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ModalLogin from "./ModalLogin";
import {
  dinamicLogin,
  hasMoreThanOneProperty,
  tonyEmail,
  tonyPassword,
} from "@/app/login/login/communFunctions";
import { setToken, setUser } from "@/lib/token/sesionToken";
import { logoutConfirm } from "@/app/components/modalAlerts";
import { LoginPromiseToken } from "@/app/types/userSesionToken";

function User(props: {
  size: number;
  windowSize: { width: number; height: number };
}) {
  const dispatch = useAppDispatch();
  const sesionToken = useAppSelector((state) => state.sesionToken);
  const [roleLabel, setRoleLabel] = useState("");
  const [modalLogin, setModalLogin] = useState(false);
  //modal
  const handleModalLogin = () => {
    setModalLogin(!modalLogin);
  };
  const hideModalLogin = () => {
    setModalLogin(false);
  };
  const handleLoggout = () => {
    logoutConfirm(() => dispatch(setToken("no")));
  };
  const handleLogin = () => {
    window.location.href = process.env.NEXT_PUBLIC_BASE_PATH + "/login";
  };
  const roleFunction = () => {
    console.log("mensaje estatico");
  };
  /*   const handleSetModalData = async ( //esto funciona bien, pero me da un error en consola...
    usurname: HTMLInputElement | undefined,
    password: HTMLInputElement | undefined
  ) => {
    if (usurname?.value !== undefined && password?.value !== undefined) {
      const loginResponse = await dinamicLogin(usurname.value, password.value); //debug
      const loginResult: LoginPromiseToken = loginResponse;
      dispatch(setToken(loginResult.data.token));
      dispatch(setUser(loginResult.data.user));
    }
    //CACAO
  }; */
  //opciones
  const roleLabels = {
    CLIENT: "Cliente",
    ADMIN: "Administrador",
    superAdmin: "Super Admin",
  };
  const userOptions = [
    //{ id: 0, label: "Panel de usuario", function: handleLoggout },
    { id: 4, label: "Cerrar sesion", function: handleLoggout },
  ];
  const logOptions = [
    { id: 1, label: "Ingresar", function: handleLogin },
    //{ id: 2, label: "Registrarse", function: handleLogin },
    //{ id: 3, label: "AUTOLOG", function: autolog }, //debug
  ];

  return (
    <>
      {
        //vista desktop
        props.windowSize.width >= 800 ? (
          <Grid container item xs={props.size}>
            <Grid item xs={12} textAlign={"center"}>
              <Typography variant="caption">
                {sesionToken.token !== "no"
                  ? "Bienvenido " +
                    sesionToken.user.person.fullName +
                    " ( " +
                    sesionToken.user.role +
                    " ) "
                  : "Ingresar"}
              </Typography>

              {/*               {modalLogin ? (
                <ModalLogin
                  hideModalLogin={hideModalLogin}
                  handleSetModalData={handleSetModalData}
                />
              ) : (
                <></>
              )} */}
            </Grid>
            <DropdownMenu
              //options={hasMoreThanOneProperty( sesionToken.sesionToken.data ) ? userOptions : logOptions}
              options={sesionToken.token !== "no" ? userOptions : logOptions}
              xs={12}
            />
          </Grid>
        ) : (
          //vista movil
          <Grid container xs={props.size} paddingLeft={2}>
            {/*             {hasMoreThanOneProperty( sesionToken.sesionToken.data ) ? (
              <DropdownMenu options={userOptions} xs={12} />
            ) : (
              <IconButton>
                <LoginIcon fontSize="large" onClick={handleModalLogin} />
              </IconButton>
            )} */}
          </Grid>
        )
      }
    </>
  );
}

export default User;
