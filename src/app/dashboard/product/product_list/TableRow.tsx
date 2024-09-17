import { basePut } from "@/app/helpers/baseApiRequest";
import {
  INewProductType,
  ProductImageArray,
  RowProducType,
  UpdateProducType,
} from "@/app/types/product";
import { Box, Button, ButtonGroup, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from '@mui/icons-material/Image';
import UpdateInput from "../add/UpdateInput";
import React, { useState } from "react";
import CustomAddNewProduct from "@/app/components/CustomAddNewProduct";
import ModalGallery from "@/app/components/ModalGalery";
import getImageFromUrl from "@/app/helpers/getImageFromUrl";

const TableRowProductList: React.FC<RowProducType> = ({
  product,
  updateFetchFunction,
  provitionalDelete,
  token,
  updateFormFields,
  updateHandler,
  updateSelectorHandler,
}) => {
  const [updateModal, setUpdateModal] = React.useState(false);
  const [imageModal, setImageModal] = useState(false)
  const [imageArray, setImageArray] = useState<ProductImageArray>({images:[]} as ProductImageArray)
  const [example, setExample] = useState<any>()
/*   const [formFields, setFormState] = useState<UpdateProducType>({
    name: "",
    price: "",
    stock: "",
    category: "",
    categoryId: "",
    description: "",
    images: [{ url: "" }],
  } as UpdateProducType); */
  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    return 0;
  };
  const toggleModal = () => {
    setUpdateModal(() => !updateModal);
  };
  const handleOpenModal = () => {
    setUpdateModal(true);
  };
  const handleCloseModal = () => {
    setUpdateModal(false);
  };
  const handleOpenImageModal = (images: ProductImageArray) => {
    setImageArray(images)
    console.log('buscando: ', images.images[0].url)
    //getImageFromUrl(images.images[0].url)
    setImageModal(true)
  }
  const handleCloseImageModal = () => {
    setImageModal(false)
  }
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const selectedFile = event.target.files?.[0];
  
    if (selectedFile) {
      //setSelectedImage(selectedFile);
      
      // Aquí puedes agregar la lógica para subir la imagen al servidor o manejarla localmente
      console.log(`Imagen seleccionada para ${key}:`, selectedFile);
    }
  };

  async function updateProduct(id: string, token: string) {
    //console.log('estoy enviando esto: ', {name: update}, "/category/" + name ) //debug
    basePut(
      "/product/" + id,
      token,
      { name: "update" },
      "Actualizando categoria, no cierre esta pestaña ni recargue la pagina"
    ).then(() => {
      updateFetchFunction();
    });
  }

  /*   async function deleteProduct(name: string, token: string) { //estatico
      Swal.fire({
        title: "Borrar categoria?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si, estoy seguro",
        denyButtonText: `no, volver`
      }).then((result) => {
        if (result.isConfirmed) {
          
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
      baseDelete(
        "/category/" + name ,
      token,
        "Eliminando, no cierre esta pestaña"
      ).then(() => {
        updateFetchFunction();
      });
    }
   */

  return (<>
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
      
      </TableCell>
      <TableCell align="center">
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button onClick={() => handleOpenImageModal({images: product.images})} ><ImageIcon/></Button>
          <Button onClick={() => toggleModal()}>
            <EditIcon />
          </Button>
          <Button
            color="error"
            onClick={() => provitionalDelete(product.id, token)}
          >
            <DeleteIcon />

{/*             <CustomAddNewProduct
              addFunction={updateFetchFunction}
              buttonText="Editar producto"
              formFields={formFields}
              handleClose={handleCloseModal}
              handler={handleOpenModal}
              itemName="Editar"
              modal={updateModal}
              selectorHandler={updateSelectorHandler}
              token={token}
            /> */}
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
    </>);
};

export default TableRowProductList;
