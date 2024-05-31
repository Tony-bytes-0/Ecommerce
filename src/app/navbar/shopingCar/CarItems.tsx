"use client";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Item } from "../../home/BodyInfoCards/ItemTypes";
import CarItem from "./CarItem";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearCar, setCarState } from "@/lib/shopingCar/shopingCart";
import { getList } from "./comunFunctions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemsStyles = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
};
const appBarStyles = {
  backgroundColor: process.env.NEXT_PUBLIC_NAVBAR_PRIMARY_COLOR
}

function CarItems() {
  const dispatch = useAppDispatch();
  const carItems = useAppSelector((state) => state.shopingCart);
  const calculateTotal = () => {
    let total = 0;
    for (let index = 0; index < carItems.items.length; index++) {
      total =
        total + carItems.items[index].price * carItems.items[index].amount;
    }
    return total;
  };
  useEffect(() => {
    console.log(
      "lista de items, al cargar el componente del carrito: ",
      getList()
    );
    dispatch(setCarState(getList()));
  }, []);

  return (
    <Grid container className="bg-slate-200">
      <Grid item xs={12} className="bg-slate-300">
      <AppBar position="static" sx = {appBarStyles}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography variant="h6" textAlign={'center'} sx={{ flexGrow: 1 }}>
            Subtotal: {calculateTotal()} $
          </Typography>
        </Toolbar>
      </AppBar>
      </Grid>
      <Grid marginTop={10} sx={ItemsStyles}>
        {carItems.items.map((e: Item) => (
          <CarItem {...e} key={e.id} />
        ))}
      </Grid>
    </Grid>
  );
}

export default CarItems;



/* "use client";
import { Box, Button, Grid, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Item } from "../../home/BodyInfoCards/ItemTypes";
import CarItem from "./CarItem";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearCar, setCarState } from "@/lib/shopingCar/shopingCart";
import { getList } from "./comunFunctions";

const modalBoxStyle = {
  position: "absolute" as "absolute",
  display: "flex",
  right: "0%",
  top: "0%",
  width: "20%",
  height: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflowY: "scroll",
};
const fixedStatusCarBar = {
  position: "fixed",
  width: "20%",
  zIndex: 10,
  textAlign: "center",
};
const ItemsStyles = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
};

function CarItems() {
  const dispatch = useAppDispatch();
  const carItems = useAppSelector((state) => state.shopingCart);
  const calculateTotal = () => {
    let total = 0;
    for (let index = 0; index < carItems.items.length; index++) {
      total =
        total + carItems.items[index].price * carItems.items[index].amount;
    }
    return total;
  };
  useEffect(() => {
    console.log(
      "lista de items, al cargar el componente del carrito: ",
      getList()
    );
    dispatch(setCarState(getList()));
  }, []);

  return (
    <Grid container /* sx={modalBoxStyle} className="bg-slate-200">
      <Grid item xs={12} sx={fixedStatusCarBar} className="bg-slate-300">
        <Typography fontSize={20}>Carrito de compras</Typography>
        <Typography fontSize={16}>Subtotal {calculateTotal()}</Typography>
      </Grid>
      <Grid marginTop={10} sx={ItemsStyles}>
        {carItems.items.map((e: Item) => (
          <CarItem {...e} key={e.id} />
        ))}
      </Grid>
    </Grid>
  );
}

export default CarItems; */
