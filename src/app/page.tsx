"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Promo from "@/app/home/promo/Promo";
import BodyInfoCards from "@/app/home/BodyInfoCards/BodyInfoCards";
import { staticItems } from "@/app/types/staticObjects";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";

const GridMainStyles = {
  backgroundColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR,
};

export default function Home() {
  const items = staticItems;
  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 1000,
  });
  const store = makeStore();
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  return (
    <Grid container sx={GridMainStyles}>
      <Provider store={store}>
        <Promo windowSize={windowSize} />
        <BodyInfoCards
          items={items}
          xs={windowSize.width <= 800 ? 5 : 2}
          windowSize={windowSize}
        />
      </Provider>
    </Grid>
  );
}
