"use client";
import { baseGet, basePost } from "@/app/helpers/baseApiRequest";
import { CategoryType } from "./types";
import { baseDashboardContainer } from "@/app/types/common";
import { useAppSelector } from "@/lib/hooks";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";
import AddCategory from "../add/Add";
import CategoryInput from "../add/CategoryInput"; 
import InvalidCredentials from "../../InvalidCredentials";
import CustomAddNewItem from "@/app/components/CustomAddNewItem";
import CategoryIcon from "@mui/icons-material/Category";
import CustomAddEditButtons from "@/app/components/CustomAddEditButtons";
import CustomTitleHeader from "@/app/components/TittleHeader";
import ElegantFont from "@/app/components/ElegantFont";

export default function CategoryAdmin() {
  
  const [welcome, setWelcome] = useState(true);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const token = useAppSelector((state) => state.sesionToken.token);
  const [newCategory, setNewCategory] = useState("");
  const [addModal, setAddModal] = useState(false);

  const handleOpen = () => setAddModal(true);
  const handleClose = () => setAddModal(false);

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
  }, [fetchCategoryList, token, welcome]);

  return (
    <Box sx={baseDashboardContainer}>
       
        {
        //token !== 'no' || process.env.DEBUG === "true" ?       

      <Grid container>
        <Grid item xs={12}>

          <CustomTitleHeader width="100%" >
            <ElegantFont textColor="#FFFFFF" >Categorias</ElegantFont>
          </CustomTitleHeader>

          <Box sx={{alignItems: 'center', display:'flex', justifyContent:'center'}}>
            <CustomAddEditButtons action={handleOpen} action2={fetchCategoryList} />
          </Box>
          <CustomAddNewItem 
            item = {newCategory}
            itemName={'Nueva categoria'}
            itemProperty="Nombre de la categoria"
            handler= {handleCategory}
            modal= {addModal}
            handleClose={handleClose}
            addFunction={createNewCategory}
            buttonText = {'Agregar'}
            icon = {<CategoryIcon/>}
          />
          <TableComponent token={token} categoryList={categoryList} updateFetchFunction={fetchCategoryList} />
        </Grid>
      </Grid>
      
        //: <InvalidCredentials />
        } 
      
    </Box>
  );
}
