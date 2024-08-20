import { Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
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
import { LoginPromiseToken } from "@/app/types/userSesionToken";

type UserTypes = {
  size: number;
  windowSize: { width: number; height: number };
  handleNavigate: (arg0: string) => void;
};
const User: React.FC<UserTypes> = ({ size, windowSize, handleNavigate }) => {
  const dispatch = useAppDispatch();
  //const router = useRouter();
  const sesionToken = useAppSelector((state) => state.sesionToken);
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
    //{ id: 2, label: "Registrarse", function: handleLogin },
    {
      id: 3,
      label: "AUTOLOG con admin",
      function: async () => {
        const localResponse = await dinamicLogin(adminEmail, adminPassword);
        const loginResult: LoginPromiseToken = localResponse;
        dispatch(setToken(loginResult.data.token));
        dispatch(setUser(loginResult.data.user));
        handleNavigate( evaluateRoleLoginAction(loginResult.data.user.role) )
        
      },
    }, //debug
  ];

  return (
    <>
      {
        //vista desktop
        windowSize.width >= 800 ? (
          <Grid container item xs={size}>
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
            </Grid>
            <DropdownMenu
              options={sesionToken.token !== "no" ? userOptions : logOptions}
              xs={12}
            />
          </Grid>
        ) : (
          //vista movil
          <Grid container xs={size} paddingLeft={2}>
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
};

export default User;
