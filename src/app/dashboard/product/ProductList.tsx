"use client";
import { baseGet, basePost } from "@/app/helpers/baseApiRequest";
import {
  exampleINewProductType,
  INewProductType,
  ProductType,
  UpdateProducType,
} from "@/app/types/product";
import { useAppSelector } from "@/lib/hooks";
import { Box, Grid, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import { regexs } from "@/app/components/regexs";
import CustomAddNewProduct from "@/app/components/CustomAddNewProduct";
import CustomAddEditButtons from "@/app/components/CustomAddEditButtons";
import CustomTitleHeader from "@/app/components/TittleHeader";
import ElegantFont from "@/app/components/ElegantFont";
import { CategoryType } from "@/app/types/category";

export default function ProductList() {
  //const [welcome, setWelcome] = useState(true);
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const token = useAppSelector((state) => state.sesionToken.token);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [formFields, setFormState] = useState<INewProductType>(
    exampleINewProductType as INewProductType
  );
  const [updateFormFields, setUpdateFormFields] = useState<INewProductType>(
    exampleINewProductType as INewProductType
  );

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
    console.log(event);
    setFormState((prevState) => ({
      ...prevState,
      categoryId: event.target.value,
    }));
  };

  const imageHandler = (file: File[]) => {
    setFormState((prevState) => ({
      ...prevState,
      //file1: file[0] as any
      images: [
        ...(prevState.images || []),
        ...(Array.isArray(file) ? file : [file]),
      ],
    }));
  };

  const handleOpen = () => setAddModal(true);
  const handleClose = () => setAddModal(false);
  const updateHandleOpen = (toUpdateForm: ProductType) => {
    
    setUpdateModal(true);
  }
  const updateHandleClose = () => setUpdateModal(false);
  //axios
  async function refreshProducList() {
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

  async function createNewProduct() {
    const formDataBody = new FormData();
    type ValidKeys = Exclude<keyof INewProductType, "images">;

    // Filter the keys and assert the type
    const keys: ValidKeys[] = Object.keys(formFields).filter(
      (key) => key !== "images"
    ) as ValidKeys[];

    keys.forEach((key) => {
      formDataBody.append(key, formFields[key]);
    });

    formFields.images.forEach((imageFile, index) => {
      const dinamicKey = "file" + (index + 1);
      console.log("este es el keyName: ", dinamicKey);
      formDataBody.append(dinamicKey, imageFile);
    });
    try {
      const response = await basePost(
        "/product/",
        token,
        formDataBody,
        "Agregando producto..."
      );
      console.log(response.data);
      setFormState(exampleINewProductType);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(){
    try {
      
    } catch (error) {
      
    }
  }

  function provitionalDelete(name: string) {
    setProductList(productList.filter((e) => e.name !== name));
  }

  useEffect(() => {
    refreshProducList();
  }, [token]);

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
            action2={refreshProducList}
          />
        </Box>

        <CustomAddNewProduct //para crear
          categoryList={categoryList}
          itemName={"Añadir producto"}
          formFields={formFields}
          modal={addModal}
          handleClose={handleClose}
          addFunction={createNewProduct}
          buttonText="Agregar"
          handler={handleChange}
          selectorHandler={selectorHandler}
          imageHandler={imageHandler}
          token={token}
          updateProduct={false}
        />
        <CustomAddNewProduct //para update
          categoryList={categoryList}
          itemName={"Actualizar producto"}
          formFields={formFields}
          modal={updateModal}
          handleClose={updateHandleClose}
          addFunction={updateProduct}
          buttonText="Actualizar"
          handler={handleChange}
          selectorHandler={selectorHandler}
          imageHandler={imageHandler}
          token={token}
          updateProduct={false}
        />
        <TableComponent
          token={token}
          productList={productList}
          updateFetchFunction={refreshProducList}
          provitionalDelete={provitionalDelete}
          //todo esto es para el actualizar dentro de dos niveles :(
          handleOpenModal={updateHandleOpen}
          handleCloseModal={updateHandleClose}
          updateFormFields={updateFormFields}
          updateHandler={handleChange}
          updateSelectorHandler={selectorHandler}
        />
      </Grid>
    </Grid>
  );
}
