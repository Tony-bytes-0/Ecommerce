"use client";
import { baseGet, basePost } from "@/app/components/baseApiRequest";
import { ProductType } from "./types";
import { useAppSelector } from "@/lib/hooks";
import {  Grid } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import AddProduct from "../add/Add";
import ProductInput from "../add/ProductInput"; 

interface IFormFields {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
}

export default function ProductList() {
  const [welcome, setWelcome] = useState(true);
  const [productList, setCategoryList] = useState<ProductType[]>([]);
  const token = useAppSelector((state) => state.sesionToken.token);
  const [addModal, setAddModal] = useState(false);

  const [formFields, setFormFields] = useState<IFormFields>({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
  });
  

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: keyof IFormFields) => {
    const { name, value } = event.target;
    if (name && value) {
      setFormFields(prevState => ({
        ...prevState,
        [fieldName]: value,
      }));
    }
/*  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [category, setCategory] = useState("") 
  */
  


/*   const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ((event && event.target.value) || event.target.value == "") {
      const value = event.target.value;
      setName(value);
    }
  }; */


  
  const handleOpen = () => setAddModal(true);
  const handleClose = () => setAddModal(false);
/*   async function fetchProductList() { // estatico
    const response = await baseGet("/product/", token, "Cargando productos...");
    setCategoryList(response.data);
  } */

  function fetchProductList ()  {
    console.log('soy una supuesta funcion asincrona :)')
  }
  async function createNewCategory() {
    basePost(
      "/category/",
      token,
      { name: name },
      "Creando categoria"
    ).then(() => {
      //fetchProductList(); // estatico
    });
  }
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
            addFunction={createNewCategory}
            buttonText = {'Agregar'}
          />
          <TableComponent token={token} productList={productList} updateFetchFunction={fetchProductList} />
        </Grid>
      </Grid>

  );
}
