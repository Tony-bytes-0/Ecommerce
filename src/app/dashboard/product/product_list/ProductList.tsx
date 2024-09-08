"use client";
import { baseGet, basePost } from "@/app/helpers/baseApiRequest";
import { ProductType } from "./types";
import { useAppSelector } from "@/lib/hooks";
import { Box, Grid, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import { regexs } from "@/app/components/regexs";
import CustomAddNewProduct from "@/app/components/CustomAddNewProduct";
import CustomAddEditButtons from "@/app/components/CustomAddEditButtons";
import CustomTitleHeader from "@/app/components/TittleHeader";
import ElegantFont from "@/app/components/ElegantFont";

interface IFormFields {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  //category: CategoryType;
}

export default function ProductList() {
  //const [welcome, setWelcome] = useState(true);
  const [productList, setProductList] = useState<ProductType[]>([]);
  const token = useAppSelector((state) => state.sesionToken.token);
  const [addModal, setAddModal] = useState(false);

  const [formFields, setFormState] = useState<IFormFields>({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => {
    const value = event.target.value;
    if (fieldName === "price" && !regexs.floatNumber.test(value)) {
      return; // Prevent updating state with invalid input
    } 
    if (fieldName === "stock" && !regexs.onlyNumbers.test(value)) {
      return; // Prevent updating state with invalid input
    }

    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const selectorHandler = (event: SelectChangeEvent) => {
    setFormState( (prevState) => ({...prevState, category: event.target.value }) );
  };

  const handleOpen = () => setAddModal(true);
  const handleClose = () => setAddModal(false);
  async function fetchProductList() { // estatico
    try {
      const response = await baseGet("/product", token, "Cargando productos...");
      console.log(response.data)
      //setProductList(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  async function createNewProduct() {
    setProductList((currentLsit) => [...currentLsit, formFields]);
    setFormState({
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
    });
  }
  function provitionalDelete(name: string) {
    setProductList(productList.filter((e) => e.name !== name));
  }
  /*   async function createNewCategory() { //estatico
    basePost(
      "/category/",
      token,
      { name: name },
      "Creando categoria"
    ).then(() => {
      //fetchProductList(); // estatico
    });
  } */
  useEffect(() => {
  fetchProductList()
  }, []);

  return (
    <Grid container>
      <Grid xs={12}>
        <CustomTitleHeader width="100%">
          <ElegantFont textColor="#FFFFFF">Productos</ElegantFont>
        </CustomTitleHeader>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomAddEditButtons
            action={handleOpen}
            action2={fetchProductList}
          />
        </Box>

        <CustomAddNewProduct
          itemName={"Añadir producto"}
          formFields={formFields}
          modal={addModal}
          handleClose={handleClose}
          addFunction={createNewProduct}
          buttonText="Agregar"
          handler={handleChange}
          selectorHandler={selectorHandler}
          token = {token}
        />
        <TableComponent
          token={token}
          productList={productList}
          updateFetchFunction={fetchProductList}
          provitionalDelete={provitionalDelete}
        />
      </Grid>
    </Grid>
  );
}
