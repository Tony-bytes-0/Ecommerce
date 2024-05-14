import { Grid } from "@mui/material";
import React from "react";
import CarouselComponent from "@/app/home/promo/CarouselComponent";


function Promo( props: {windowSize: {width: number, height: number}}) {
  const imageUrls = {
    home:"/images/home.jpg",
    ropa:"/images/ropa.jpg",
    electrodomesticos:"/images/electrodomesticos.jpg",
  }
  var products = [
    {
      name: "Hogar",
      image: imageUrls.home,
    },
    {
      name: "Ropa",
      image: imageUrls.ropa,
    },
    {
      name: "Electrodomesticos",
      image: imageUrls.electrodomesticos,
    },
  ];
  return (
    <Grid item xs={12} marginTop={10}>
      <CarouselComponent windowSize = {props.windowSize} products={products} />
    </Grid>
  );
}

export default Promo;
