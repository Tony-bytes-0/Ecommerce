"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

type products = {
  name: string;
  image: string;
};
type CarouselProps = {
  products: products[];
  windowSize: { width: number; height: number };
};
const CarouselComponent: React.FC<CarouselProps> = ({ products }) => {
  return (
    <Grid item >
      <Carousel autoPlay interval={5000}>
        {products.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
};

function Item(props: { item: { name: string; image: string } }) {
  return (
    <Box className="flex flex-col items-center min-h-72 w-full">
      <Image
        src={props.item.image}
        alt={props.item.name}
        fill={true}
        objectFit="container"
        style={{
          maskImage: "linear-gradient(black 80%, transparent)",
        }}
      />
      {/* <p>{props.item.description}</p> */}
    </Box>
  );
}

export default CarouselComponent;
