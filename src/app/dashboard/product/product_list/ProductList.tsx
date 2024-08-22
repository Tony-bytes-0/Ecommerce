"use client";
import { baseGet, basePost } from "@/app/components/baseApiRequest";
import { ProductType } from "./types";
import { useAppSelector } from "@/lib/hooks";
import {  Grid } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import AddProduct from "../add/Add";
import ProductInput from "../add/ProductInput"; 
import { regexs } from "@/app/components/regexs";

interface IFormFields {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
}

export default function ProductList() {
  const [welcome, setWelcome] = useState(true);
  const [productList, setProductList] = useState<ProductType[]>([]);
  const token = useAppSelector((state) => state.sesionToken.token);
  const [addModal, setAddModal] = useState(false);

  const [formFields, setFormState] = useState<IFormFields>({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => {
    const value = event.target.value;
    if (fieldName === 'price' && !regexs.floatNumber.test(value)) {
      return; // Prevent updating state with invalid input
    }
    if (fieldName === 'stock' && !regexs.onlyNumbers.test(value)) {
      return; // Prevent updating state with invalid input
    }

    setFormState(prevState => ({
      ...prevState,
      [fieldName]: value, }));
  };
    

  
  const handleOpen = () => setAddModal(true);
  const handleClose = () => setAddModal(false);
/*   async function fetchProductList() { // estatico
    const response = await baseGet("/product/", token, "Cargando productos...");
    setCategoryList(response.data);
  } */

  function fetchProductList ()  {
    console.log('soy una supuesta funcion asincrona :)')
  }
  async function createNewProduct(){
    setProductList(
      currentLsit => [
        ...currentLsit, formFields
      ]
    )
    setFormState({
      name: '',
      description: '',
      price: '',
      stock: '',
      category: '',
    })
  }
  function provitionalDelete(name: string){
    setProductList(
      productList.filter((e) => e.name !== name)
    )
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
    if (token == "no") {
      console.log("deslogeado!");
    } else {
      if (welcome) {
        setWelcome(false);
        //fetchProductList(); // estatico
      }
    }
  }, [productList, token, welcome]);

  return (
      <Grid container>
        <Grid item xs={12}>
          <AddProduct handleOpen={handleOpen} updateFetchFunction={fetchProductList} />

          <ProductInput
            modalTitle = {'Añadir producto'}
            formFields = { formFields }
            handler={handleChange}
            modal={addModal}
            handleClose={handleClose}
            addFunction={createNewProduct}
            buttonText = {'Agregar'}
          />
          <TableComponent 
          token={token} 
          productList={productList} 
          updateFetchFunction={fetchProductList}
          provitionalDelete = {provitionalDelete}
          />
        </Grid>
      </Grid>

  );
}
