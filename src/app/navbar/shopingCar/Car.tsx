import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CarItems from "./CarItems";

function Car(props: { phone: boolean; size: number; linkStyles: string }) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <>
      {props.phone ? (
        <Box></Box>
      ) : (
        <Grid item xs={props.size}>
            <ListItemIcon className={props.linkStyles} onClick={toggleDrawer}>
              <ShoppingCartIcon fontSize="large" />
            </ListItemIcon>
          <Drawer anchor="right" open={drawer} onClose={toggleDrawer}>
            <CarItems />
          </Drawer>
        </Grid>
      )}
    </>
  );
}

export default Car;
