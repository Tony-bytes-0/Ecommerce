import { Grid, IconButton, Slide } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAppSelector } from "@/lib/hooks";

export default function AdminPanel() {
  const token = useAppSelector((state) => state.sesionToken.token)
  const [showSidebar, setShowSidebar] = useState(false);
  return (<>
    {token !== 'no' ? <> 
      <IconButton
        style={{
          position: "absolute",
          left: showSidebar ? "30vh" : "2vh",
          top: "30vh",
          background: "#FFFFFF",
        }}
        onClick={() => setShowSidebar(!showSidebar)}
      >
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
            zIndex: 20,
            left: "0",
            top: "0",
            height: "100vh",
            width: "30vh",
            background: "red",
          }}
        ></Grid>
      </Slide>
      </>  : <></>}
  </>);
}
