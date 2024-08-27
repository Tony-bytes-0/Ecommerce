import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
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
  return (
    <Dialog open={modal} onClose={handleClose}>
      <DialogTitle>
        <CustomTitleHeader width="100%">{itemName}</CustomTitleHeader>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>

{/*         <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>A</ListItemIcon>
                      <ListItemText primary={'Nombre'} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <TextField
                      value={formFields.name}
                      onChange={(event) => handler(event, 'name')}
                      fullWidth
                    ></TextField>
                  </ListItem>
                </List>
              </nav>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>A</ListItemIcon>
                      <ListItemText primary={'Descripcion'} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <TextField
                      value={formFields.name}
                      onChange={(event) => handler(event, 'description')}
                      fullWidth
                    ></TextField>
                  </ListItem>
                </List>
              </nav>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>A</ListItemIcon>
                      <ListItemText primary={'precio'} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <TextField
                      value={formFields.name}
                      onChange={(event) => handler(event, 'price')}
                      fullWidth
                    ></TextField>
                  </ListItem>
                </List>
              </nav>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>A</ListItemIcon>
                      <ListItemText primary={'stock'} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <TextField
                      value={formFields.name}
                      onChange={(event) => handler(event, 'stock')}
                      fullWidth
                    ></TextField>
                  </ListItem>
                </List>
              </nav>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>A</ListItemIcon>
                      <ListItemText primary={'Categoria'} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <TextField
                      value={formFields.name}
                      onChange={(event) => handler(event, 'category')}
                      fullWidth
                    ></TextField>
                  </ListItem>
                </List>
              </nav> */}
    {Object.entries(formFields).slice(0, 4).map(([key, value]) => (
            <div key={key}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>A</ListItemIcon>
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

          {/*           <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>A</ListItemIcon>
                  <ListItemText primary={'aksdajsdh'} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <TextField
                  value={formFields.name}
                  onChange={(event) => handler(event, "name")}
                  fullWidth
                ></TextField>
              </ListItem>
            </List>
          </nav> */}
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
