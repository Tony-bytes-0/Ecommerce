import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InventoryIcon from "@mui/icons-material/Inventory";
import DescriptionIcon from "@mui/icons-material/Description";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import CustomTitleHeader from "./TittleHeader";
import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";
import { baseGet } from "../helpers/baseApiRequest";
import { ChangeEvent, useEffect, useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import { INewProductType, ProductType } from "../types/product";
import { CategoryType } from "../types/category";
import ImageInputComponent from "./ImgInput";

type CustomAddNewItemType = {
  buttonText: string;
  itemName: string;
  handler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => void;
  selectorHandler: (event: SelectChangeEvent) => void;
  imageHandler: any;
  modal: boolean;
  handleClose: () => void;
  addFunction: () => void;
  token: string;
  formFields: INewProductType;
  categoryList: CategoryType[];
};

const CustomAddNewProduct: React.FC<CustomAddNewItemType> = ({
  formFields,
  buttonText,
  handler,
  modal,
  handleClose,
  addFunction,
  itemName,
  token,
  selectorHandler,
  imageHandler,
  //categoryList,
}) => {
  const addAndCloseModal = () => {
    addFunction();
    handleClose();
  };
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])

  const translateTitles = (param: string) => {
    switch (param) {
      case "name":
        return "Nombre";
      case "price":
        return "Precio";
      case "stock":
        return "Cantidad";
      case "description":
        return "Descripción";
      case "categoryId":
        return "Categoria";
      case "images":
        return "Imagen";
      default:
        return null;
    }
  };

  const getDynamicIcon = (param: string): React.ReactNode => {
    switch (param) {
      case "name":
        return <LabelIcon />;
      case "price":
        return <LocalOfferIcon />;
      case "stock":
        return <InventoryIcon />;
      case "description":
        return <DescriptionIcon />;
      case "categoryId":
        return <CategoryIcon />;
      case "images":
        return <ImageIcon />;
      default:
        return null; // Devuelve null si el parâmetro no es conocido
    }
  };
  async function fetchCategoryList() {
    if(token !== 'no'){
      const response = await baseGet("/category/", token, "Cargando categorias");
      setCategoryList(response.data);
    }
  }
  useEffect(() => {
    fetchCategoryList();
  }, [token])

  return (
    <Dialog open={modal} onClose={handleClose}>
      <DialogTitle>
        <CustomTitleHeader width="100%">
          <b>{itemName}</b>
        </CustomTitleHeader>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {Object.entries(formFields).map(([key, value]) => (
            //Object.entries(formFields).slice(0, 4).map(([key, value]) => (
            <div key={key}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{getDynamicIcon(key)}</ListItemIcon>
                      <ListItemText primary={translateTitles(key)} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    {key !== "categoryId" &&
                    key !== "file1" &&
                    key !== "categoryId" ? (
                      <TextField
                        value={value}
                        onChange={(event) => handler(event, key)}
                        fullWidth
                      />
                    ) : (
                      <></>
                    )}
                    {/*Casos irregulares, campos irregulares*/}
                    {key == "categoryId" ? (
                      <Select
                        fullWidth
                        value={formFields.categoryId ?? ""}
                        onChange={selectorHandler}
                      >
                        {categoryList.map((e) => (
                            <MenuItem key={e.id} value={e.id}>
                              {e.name}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    ) : (
                      <></>
                    )}
                    {key == "file1" ? (
                      <>
                        <ImageInputComponent onImageChange={imageHandler} image={formFields.file1} />
                      </>
                    ) : (
                      <></>
                    )}
                  </ListItem>
                </List>
              </nav>
            </div>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={addAndCloseModal}>
          <Typography fontFamily={"cursive"}>{buttonText}</Typography>
        </Button>
        <Button onClick={handleClose}>
          <Typography fontFamily={"cursive"}>Cerrar</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

{
  /*                     <></> //key === "image" ? (
                      // Contenedor para añadir una imagen
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="body2">Añadir Imagen:</Typography>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(event) => imageSelector(event, key)}
                          style={{ margin: "10px 0" }}
                        />
                        {formFields.images && (
                          <img
                            src={URL.createObjectURL(new Blob)}
                            alt="Selected Image"
                            style={{ maxWidth: "100%", height: "auto" }}
                          />
                        )} 
                      </Box> */
}

export default CustomAddNewProduct;
