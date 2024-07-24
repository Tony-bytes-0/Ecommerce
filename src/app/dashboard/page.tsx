"use client";
import { useAppSelector } from "@/lib/hooks";
import { Box, Button, Grid, IconButton, Slide } from "@mui/material";
import DrawerLeft from "./DrawerLeft";
import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const baseContainer = {
  paddingTop: "5%",
  paddingLeft: "4rem",
  height: "100vh",
  width: "100%",
  color: "#000000",
  backgroundImage: process.env.register_background_gradient,
};
const buttonStyles = {
  background: "#f1f1f1",
  width: "4rem",
  position: "fixed",
  top: "30%",
  left: "0%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
};
const Dashboard: React.FC = ({}) => {
  const token = useAppSelector((state) => state.sesionToken);
  //states
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Grid container style={baseContainer}>
      {" "}
      {/* {token.user.role == "ADMIN" ? ( */}
      <Grid item xs={12}>
        <DrawerLeft drawerState={open}/>
        <Box sx={buttonStyles}>
          <IconButton onClick={toggleDrawer(true)}>
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
{/*         <Grid item xs={12}>
          <RegisterUserDashboard open={userRegister} />
          <ListUsersDashboard open={userList} />
        </Grid> */}
      </Grid>
      {/*       ) : (
        <Grid item xs={12} >
          <h2>no tiene permiso para administrar el sitio</h2>
        </Grid>
      )} */}
    </Grid>
  );
};

export default Dashboard;
