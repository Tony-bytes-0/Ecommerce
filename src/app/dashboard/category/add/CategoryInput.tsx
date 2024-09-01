"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";



const CategoryInput: React.FC<{
  buttonText: string;
  newCategory: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  modal: boolean;
  handleClose: () => void;
  addFunction: () => void;
}> = ({ newCategory, handler, handleClose, modal, addFunction, buttonText }) => {
    const addAndCloseModal = () => {
        addFunction()
        handleClose()
    }
  return (
    <Dialog open={modal} onClose={handleClose}>
      <DialogTitle>Añadir una nueva categoria</DialogTitle>
      <DialogContent>
      <TextField
          className="bg-white"
          size="small"
          variant="filled"
          value={newCategory}
          onChange={handler}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={addAndCloseModal}>{buttonText}</Button>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryInput;
