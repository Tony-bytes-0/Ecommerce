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



const UpdateInput: React.FC<{
  buttonText: string;
  newValue: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  modal: boolean;
  handleClose: () => void;
  addFunction: (_id: string, token: string) => Promise<void>;
  token: string;
}> = ({ newValue, handler, handleClose, modal, addFunction, buttonText, token }) => {
    const addAndCloseModal = () => {
        addFunction(newValue, token)
        handleClose()
    }
  return (
    <Dialog open={modal} onClose={handleClose}>
      <DialogTitle>Editar categoria</DialogTitle>
      <DialogContent>
      <TextField
          className="bg-white"
          size="small"
          variant="filled"
          value={newValue}
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

export default UpdateInput;
