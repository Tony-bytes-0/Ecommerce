"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";



const ProductInput: React.FC<{
  formFields: {
    name: string;
    description: string;
    price: string;
    stock: string;
    category: string;
  }
  buttonText: string;
  modalTitle: string;
  //handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handler: (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => void;
  modal: boolean;
  handleClose: () => void;
  addFunction: () => void;
}> = ({ handler, handleClose, modal, addFunction, buttonText, modalTitle }) => {
    const addAndCloseModal = () => {
        addFunction()
        handleClose()
    }
  return (
    <Dialog open={modal} onClose={handleClose}>
      <Box component="form">
        <DialogTitle>{modalTitle}</DialogTitle>
        <DialogContent>
        <TextField
            label="Nombre"
            className="bg-white"
            size="small"
            variant="filled"
            value={name}
            onChange={(event) => handler(event, 'name')}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addAndCloseModal}>{buttonText}</Button>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
        </Box>
      </Dialog>
  );
};

export default ProductInput;
