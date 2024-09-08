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
import { CategoryType } from "../dashboard/category/categoryList/types";

type CustomAddNewItemType = {
  buttonText: string;
  itemName: string;
  handler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => void;
  selectorHandler: (event: SelectChangeEvent) => void;
  modal: boolean;
  handleClose: () => void;
  addFunction: () => void;
  token: string;
  formFields: {
    name: string;
    description: string;
    price: string;
    stock: string;
    category: string;
  };
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
}) => {
  const addAndCloseModal = () => {
    addFunction();
    handleClose();
  };
  const [CategoryList, setCategoryList] = useState<CategoryType[]>([]);
  async function fetchCategoryList() {
    const response = await baseGet("/category/", token, "Cargando categorias");
    setCategoryList(response.data);
  }
  useEffect(() => {
    fetchCategoryList();
  }, []);

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
      case "category":
        return "Categoria";
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
      case "category":
        return <CategoryIcon />;
      default:
        return null; // Devuelve null si el parâmetro no es conocido
    }
  };

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
                    {key == "category" ? (
                      <Select
                        fullWidth
                        value={formFields.category ?? ''}
                        onChange={selectorHandler}
                      >
                        {CategoryList.map((e) => (
                          <MenuItem key={e._id} value={e._id}>
                            {e.name}
                          </MenuItem>
                        ))}
                      </Select>
                    ) : (
                      <TextField
                        value={value}
                        onChange={(event) => handler(event, key)}
                        fullWidth
                      ></TextField>
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

export default CustomAddNewProduct;
