import { Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import LoginIcon from "@mui/icons-material/Login";
import DropdownMenu from "@/app/components/DropdownMenu";
import ModalLogin from "./ModalLogin";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { mutatePassword } from "@/lib/ModalLogin/password";
import { mutateUsurname } from "@/lib/ModalLogin/usurname";

function User(props: {
  size: number;
  windowSize: { width: number; height: number };
}) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.usurname);
  const password = useAppSelector((state) => state.password);
  const [logged, setLogged] = useState(true);
  const [modalLogin, setModalLogin] = useState(false);

  const handleModalLogin = () => {
    setModalLogin(!modalLogin);
  };
  const hideModalLogin = () => {
    setModalLogin(false);
  };
  const handleSetModalData = (
    usurname: HTMLInputElement | undefined,
    password: HTMLInputElement | undefined
  ) => {
    console.log('estos son los datos recibidos en la funcion: ', usurname, password)
    dispatch(mutateUsurname(usurname));
    dispatch(mutatePassword(password));
  };
  const handleLoggout = () => {
    Swal.fire({
      title: "Cerrar sesión",
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "Seguir conectado",
      denyButtonText: `cerrar sesión`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("seguir conectado");
      } else if (result.isDenied) {
        setLogged(false);
      }
    });
  };
  const handleLogin = () => {
    window.location.href = process.env.NEXT_PUBLIC_BASE_PATH + "/login";
  };
  const autolog = () => {
    console.log(user, password, " usuario y contraseña guardados.");
  };
  const userOptions = [
    //{ id: 0, label: "Panel de usuario", function: handleLoggout },
    { id: 4, label: "Cerrar sesion", function: handleLoggout },
  ];
  const logOptions = [
    { id: 1, label: "Ingresar", function: handleModalLogin },
    { id: 2, label: "Registrarse", function: handleLogin },
    { id: 3, label: "AUTOLOG", function: autolog }, //debug
  ];
  return (
    <>
      {props.windowSize.width >= 800 ? ( //vista desktop
        <Grid container item xs={props.size}>
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant="caption">
              {logged ? "Bienvenido" : "Ingresar"}
            </Typography>
            {modalLogin ? (
              <ModalLogin
                hideModalLogin={hideModalLogin}
                handleSetModalData={handleSetModalData}
              />
            ) : (
              <></>
            )}
          </Grid>
          <DropdownMenu options={logged ? userOptions : logOptions} xs={12} />
        </Grid>
      ) : (
        //vista movil
        <Grid container xs={props.size} paddingLeft={2}>
          {logged ? (
            <DropdownMenu options={userOptions} xs={12} />
          ) : (
            <IconButton>
              <LoginIcon fontSize="large" onClick={handleModalLogin} />
            </IconButton>
          )}
        </Grid>
      )}
    </>
  );
}

export default User;
