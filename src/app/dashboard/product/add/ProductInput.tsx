"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { largeFontSize } from "@/app/types/globalFontSizes"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CategoryIcon from '@mui/icons-material/Category';


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
    <Dialog open={modal} onClose={handleClose} >
      <Box component="form" padding={5} sx={{ background: process.env.NEXT_PUBLIC_SECONDARY_COLOR }}>
        <DialogTitle justifyItems={'center'}>
          <Typography textAlign={'center'} fontSize={largeFontSize}>

            <CategoryIcon sx={{marginRight:3}} fontSize="large" />
            <b>{modalTitle}</b>
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            className="bg-white"
            size="medium"
            variant="outlined"
            value={formFields.name}
            onChange={(event) => handler(event, 'name')}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Descripción"
            className="bg-white"
            size="medium"
            variant="outlined"
            value={formFields.description}
            onChange={(event) => handler(event, 'description')}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Precio"
            className="bg-white"
            size="medium"
            variant="outlined"
            value={formFields.price}
            onChange={(event) => handler(event, 'price')}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Stock"
            className="bg-white"
            size="medium"
            variant="outlined"
            value={formFields.stock}
            onChange={(event) => handler(event, 'stock')}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Categoria"
            className="bg-white"
            size="medium"
            variant="outlined"
            value={formFields.category}
            onChange={(event) => handler(event, 'category')}
            fullWidth
            margin="normal"
          />
          
        </DialogContent>
        <DialogActions sx={{
          alignItems: 'center',
          justifyContent: 'space-around',
          background: process.env.NEXT_PUBLIC_PRIMARY_COLOR
        }}>
          <IconButton onClick={addAndCloseModal} sx={{
              ':hover': {
                backgroundColor: '#41eb58', // Background color on hover
              },
            }}>
            <AddIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleClose} sx={{
              ':hover': {
                backgroundColor: '#de401e', // Background color on hover
              },
            }} >
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ProductInput;
