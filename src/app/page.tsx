"use client";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Promo from "@/app/home/promo/Promo";
import ProductsContainer from "@/app/home/BodyInfoCards/ProductsContainer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import { ProductType } from "./types/product";
import { baseGet } from "./helpers/baseApiRequest";
import ActualPage from "./home/ActualPage";
import { CategoryType } from "./types/category";
import {
  deleteFilters,
  setFilter,
} from "@/lib/productfilters/productFiltersSlice";

const GridMainStyles = {
  backgroundColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR,
};

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const store = makeStore();
  const token = useAppSelector((state) => state.sesionToken.token);
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const [filter, setFilter] = useState({
    id: "",
    name: "Todos los productos",
  });
  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 1000,
  });

  const categorySelectHandler = (categoryName: string) => {
    console.log(categoryName);
    setFilter({
      id: "",
      name: categoryName,
    });
  };
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
  async function getCategorys() {
    if (token !== "no") {
      try {
        const response = await baseGet(
          "/category/",
          token,
          "Cargando productos..."
        );
        setCategoryList(response.data);
      } catch (error) {}
    }
  }
  useEffect(() => {
    getProducts();
    getCategorys();
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [token]);

  return (
    <Grid container sx={GridMainStyles}>
      <Provider store={store}>
        <Promo windowSize={windowSize} />
        <ActualPage
          filter={filter}
          categoryList={categoryList}
          categorySelectHandler={categorySelectHandler}
        />
        <ProductsContainer
          products={productList}
          xs={windowSize.width <= 800 ? 5 : 3}
        />
      </Provider>
    </Grid>
  );
};

export default Home;
