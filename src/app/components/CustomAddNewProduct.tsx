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
import DescriptionIcon from '@mui/icons-material/Description';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import CustomTitleHeader from "./TittleHeader";
import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";

type CustomAddNewItemType = {
  buttonText: string;
  itemName: string;
  handler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => void;
  modal: boolean;
  handleClose: () => void;
  addFunction: () => void;
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
}) => {
  const addAndCloseModal = () => {
    addFunction();
    handleClose();
  };

  const getDynamicIcon = (param: string): React.ReactNode => {
    switch (param) {
      case "name":
        return <LabelIcon />;
      case "price":
        return <LocalOfferIcon />;
      case "stock":
        return <InventoryIcon />;
      case "desciption":
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
        <CustomTitleHeader width="100%">{itemName}</CustomTitleHeader>
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
                      <ListItemText primary={key} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <TextField
                      value={value}
                      onChange={(event) => handler(event, key)}
                      fullWidth
                    ></TextField>
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
