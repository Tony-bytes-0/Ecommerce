import { basePut } from "@/app/helpers/baseApiRequest";
import { RowProducType } from "@/app/types/product";
import { Button, ButtonGroup, TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import UpdateInput from "../add/UpdateInput";
import Swal from "sweetalert2";
import React from "react";

const TableRowProductList: React.FC<RowProducType> = ({
    product,
    updateFetchFunction,
    provitionalDelete,
    token,
  }) => {
    const [update, setUpdate] = React.useState("");
    const [updateModal, setUpdateModal] = React.useState(false);
    const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
      if ((event && event.target.value) || event.target.value == "") {
        const value = event.target.value;
        setUpdate(value);
      }
    };
    const toggleModal = () => {
      setUpdateModal(() => !updateModal);
    };
  
    async function updateCategory(name: string, token: string) {
      //console.log('estoy enviando esto: ', {name: update}, "/category/" + name ) //debug
      basePut(
        "/category/" + name,
        token,
        { name: update },
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
  
    return (
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
            <Button onClick={() => toggleModal()}>
              <EditIcon />
            </Button>
            <Button color="error" onClick={() => provitionalDelete(product.id, token)}>
              <DeleteIcon />
              <UpdateInput
                newValue={update}
                handler={handleUpdate}
                modal={updateModal}
                handleClose={toggleModal}
                addFunction={() => updateCategory(product.id, token)}
                token={token}
                buttonText={"Editar"}
              />
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    );
  };

  export default TableRowProductList;