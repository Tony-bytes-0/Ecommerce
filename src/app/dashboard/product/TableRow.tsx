import { basePut } from "@/app/helpers/baseApiRequest";
import {
  INewProductType,
  ProductImageArray,
  ProductType,
  RowProducType,
  UpdateProducType,
} from "@/app/types/product";
import { Box, Button, ButtonGroup, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from "@mui/icons-material/Image";
import React, { useState } from "react";
import CustomAddNewProduct from "@/app/components/CustomAddNewProduct";
import ModalGallery from "@/app/components/ModalGalery";
import getImageFromUrl from "@/app/helpers/getImageFromUrl";

const TableRowProductList: React.FC<RowProducType> = ({
  product,
  handleOpenModal,
  setFixedValuesInFormData,
  deleteProduct,
}) => {
  const [updateModal, setUpdateModal] = React.useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [imageArray, setImageArray] = useState<ProductImageArray>({
    images: [],
  } as ProductImageArray);
  const [example, setExample] = useState<any>();

  const setValuesAndOpenEditModal = (valuesToSetUpdate: ProductType) => {
    //cuando se actualiza, se ejecuta esto primero
    console.log(
      "necesito convertir esto en file antes de poder actualizar",
      typeof valuesToSetUpdate.images
    ); //necesito convertir
    setFixedValuesInFormData(valuesToSetUpdate);
    handleOpenModal();
  };
  const handleOpenImageModal = (images: ProductImageArray) => {
    setImageArray(images);
    console.log("buscando: ", images.images[0].url);
    //getImageFromUrl(images.images[0].url)
    setImageModal(true);
  };
  const handleCloseImageModal = () => {
    setImageModal(false);
  };

  return (
    <>
      <TableRow
        //key={user.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{product.name}</TableCell>
        <TableCell align="center">{product.description}</TableCell>
        <TableCell align="center">{product.price}</TableCell>
        <TableCell align="center">{product.category.name}</TableCell>
        <TableCell align="center">{product.stock}</TableCell>

        <TableCell align="center">
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button
              onClick={() => handleOpenImageModal({ images: product.images })}
            >
              <ImageIcon />
            </Button>
            <Button onClick={() => setValuesAndOpenEditModal(product)}>
              <EditIcon />
            </Button>
            <Button color="error" onClick={() => deleteProduct(product.id)}>
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
      <ModalGallery
        images={imageArray}
        isOpen={imageModal}
        onClose={handleCloseImageModal}
        example={example}
      />
    </>
  );
};

export default TableRowProductList;
