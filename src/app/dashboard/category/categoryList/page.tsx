"use client";
import { baseGet, basePost } from "@/app/components/modalAlerts";
import { CategoryType } from "@/app/types/category";
import { baseDashboardContainer } from "@/app/types/common";
import { useAppSelector } from "@/lib/hooks";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import AddCategory from "../add/Add";
import CategoryInput from "../add/CategoryInput";

export default function CategoryAdmin() {
  const [welcome, setWelcome] = useState(true);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const token = useAppSelector((state) => state.sesionToken.token);
  const [newCategory, setNewCategory] = useState("");
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    if ((event && event.target.value) || event.target.value == "") {
      const value = event.target.value;
      setNewCategory(value);
    }
  };
  async function fetchCategoryList() {
    const response = await baseGet("/category/", token, "Cargando categorias");
    setCategoryList(response.data);
  }
  async function createNewCategory() {
    basePost(
      "/category/",
      token,
      { name: newCategory },
      "Creando categoria"
    ).then(() => {
      fetchCategoryList();
    });
  }
  useEffect(() => {
    if (token == "no") {
      console.log("deslogeado!");
    } else {
      if (welcome) {
        setWelcome(false);
        fetchCategoryList();
      }
    }
  }, [categoryList, token]);

  return (
    <Box sx={baseDashboardContainer}>
      <Grid container>
        <Grid item xs={12}>
          <AddCategory handleOpen={handleOpen} />
          <CategoryInput
            newCategory={newCategory}
            handler={handleCategory}
            modal={modal}
            handleClose={handleClose}
            addFunction={createNewCategory}
          />
          <TableComponent token={token} categoryList={categoryList} />
        </Grid>
      </Grid>
    </Box>
  );
}
