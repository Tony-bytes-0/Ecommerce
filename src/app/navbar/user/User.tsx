import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ModalOptions from "./ModalOptions";
import Swal from "sweetalert2";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";

const modalBoxStyle = {
  position: "absolute" as "absolute",
  display: "flex",
  right: "20%",
  top: "10%",
  width: "40%",
  height: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //overflowY: "scroll",
};

function User(props: {
  size: number;
  windowSize: { width: number; height: number };
}) {
  const [user, setUser] = useState("Usuario");
  const [logged, setLogged] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLoggout = () => {
    Swal.fire({
      title: "Cerrar sesión",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Seguir conectado",
      denyButtonText: `Confirmar, cerrar sesión`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("seguir conectado");
      } else if (result.isDenied) {
        setLogged(false);
      }
    });
  };
  const handleLogin = () => {
    setLogged(true);
  };
  return (
    <>
      {props.windowSize.width >= 800 ? (
        <Grid container xs={props.size}>
          {logged ? (
            <Grid item xs={12} textAlign={"center"}>
              <Typography variant="caption">Bienvenido</Typography>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item xs={12}>
            <ModalOptions
              user={user}
              logged={logged}
              handleLoggout={handleLoggout}
              handleLogin={handleLogin}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container xs={props.size}>
          {logged ? (
            <IconButton>
              <Box display={"flex"} flexDirection={"column"}>
                <button onClick={handleOpen}>
                  <PersonIcon fontSize="large" />
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </IconButton>
          ) : (
            <IconButton>
              <LoginIcon fontSize="large" onClick={handleLoggout} />
            </IconButton>
          )}
        </Grid>
      )}
    </>
  );
}

export default User;
