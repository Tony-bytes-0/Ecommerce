import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
function HamburgerMenu(props: {
  xs: number;
  windowSize: { width: number; height: number };
}) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const [links, setLinks] = useState([
    { id: 1, label: "Ropa", href: "/" },
    { id: 2, label: "Electrodomesticos", href: "/" },
    { id: 3, label: "Computación", href: "/" },
  ]);

  return (
    <>
      {props.windowSize.width <= 800 ? (
        <Grid item xs={props.xs} sx={{ paddingLeft: 2 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
            <List>
              {links.map((e) => (
                <ListItem key={e.id} button>
                  <Link href={e.href}>
                    <Typography fontSize={20}>{e.label}</Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
}

export default HamburgerMenu;
