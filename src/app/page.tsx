"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Promo from "@/app/home/promo/Promo";
import ProductsContainer from "@/app/home/BodyInfoCards/ProductsContainer";
import { staticItems } from "@/app/types/staticObjects";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import { ProductType } from "./types/product";
import { baseGet } from "./helpers/baseApiRequest";

const GridMainStyles = {
  backgroundColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR,
};

export default function Home() {
  const items = staticItems;
  const store = makeStore();
  const token = useAppSelector((state) => state.sesionToken.token);
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 1000,
  });
  async function getProducts() {
    if (token !== "no") {
      try {
        const response = await baseGet(
          "/product/",
          token,
          "Cargando productos..."
        );
        setProductList(response.data);
      } catch (error) {}
    }
  }
  useEffect(() => {
    getProducts();
    const handleResize = () => {
      //if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      //}
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [token]);

  return (
    <Grid container sx={GridMainStyles}>
      <Provider store={store}>
        <Promo windowSize={windowSize} />
        {/*         <BodyInfoCards
          items={items}
          xs={windowSize.width <= 800 ? 5 : 3}
          windowSize={windowSize}
        /> */}
        <ProductsContainer
          products={productList}
          xs={windowSize.width <= 800 ? 5 : 3}
        />
      </Provider>
    </Grid>
  );
}
