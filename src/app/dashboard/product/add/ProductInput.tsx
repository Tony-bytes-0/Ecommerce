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
  handler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => void;
  modal: boolean;
  handleClose: () => void;
  addFunction: () => void;
}> = ({ handler, handleClose, modal, addFunction, buttonText, modalTitle, formFields }) => {
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
            value={formFields.name}
            onChange={(event) => handler(event, 'name')}
            fullWidth
          />

        <TextField
            label="Descripción"
            className="bg-white"
            size="small"
            variant="filled"
            value={formFields.description}
            onChange={(event) => handler(event, 'description')}
            fullWidth
          />

          <TextField
            label="Precio"
            className="bg-white"
            size="small"
            variant="filled"
            value={formFields.price}
            onChange={(event) => handler(event, 'price')}
            fullWidth
          />

          <TextField
            label="Stock"
            className="bg-white"
            size="small"
            variant="filled"
            value={formFields.stock}
            onChange={(event) => handler(event, 'stock')}
            fullWidth
          />

          <TextField
            label="Categoria"
            className="bg-white"
            size="small"
            variant="filled"
            value={formFields.category}
            onChange={(event) => handler(event, 'category')}
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
