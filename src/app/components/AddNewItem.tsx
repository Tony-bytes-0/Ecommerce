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
  item: string;
  itemName: string;
  itemProperty: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  modal: boolean;
  handleClose: () => void;
  addFunction: () => void;
  icon: any;
};

const CustomAddNewItemType: React.FC<CustomAddNewItemType> = ({
  item,
  itemProperty,
  buttonText,
  handler,
  modal,
  handleClose,
  addFunction,
  icon,
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
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={itemProperty} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <TextField value={item} onChange={handler} fullWidth></TextField>
              </ListItem>
            </List>
          </nav>
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

export default CustomAddNewItemType;
