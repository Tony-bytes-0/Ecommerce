import { Grid, IconButton, Slide } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function AdminPanel() {
  const [showSidebar, setShowSidebar] = useState(false);
  const mainStyles = {
    position: "absolute",
    height: "",
  };
  return (
    <>
      <IconButton style={{
        position: "absolute", left: showSidebar ? '30vh' : '2vh', top:'30vh', background:'#FFFFFF',
      }} onClick={() => setShowSidebar(!showSidebar)}>
        <ArrowForwardIosIcon />
      </IconButton>
      <Slide
        in={showSidebar}
        container={null}
        direction="right"
        mountOnEnter
        unmountOnExit
      >
        <Grid
          style={{
            position: "fixed",
            left: "0",
            height: "100vh",
            width: "30vh",
            background: "red",
          }}
        >
        </Grid>
      </Slide>
    </>
  );
}
