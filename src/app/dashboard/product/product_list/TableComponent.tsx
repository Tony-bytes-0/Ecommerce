"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import {
  propsProductList,
  TableComponentProductType,
} from "@/app/dashboard/product/product_list/types";
import UpdateInput from "../add/UpdateInput";
import { baseDelete, basePut } from "@/app/helpers/baseApiRequest";
import { RowProducType, TableProducTypeList } from "@/app/types/product";

const Row: React.FC<RowProducType> = ({
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

const TableComponent: React.FC<TableProducTypeList> = ({
  productList,
  updateFetchFunction,
  provitionalDelete,
  token,
}) => {
  console.log("desde table component: ", productList);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Nombre</b>
            </TableCell>
            <TableCell align="center">
              <b>Descripcción</b>
            </TableCell>
            <TableCell align="center">
              <b>Precio</b>
            </TableCell>
            <TableCell align="center">
              <b>Categoria</b>
            </TableCell>
            <TableCell align="center">
              <b>Stock</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((product, index) => (
            <TableRow key={index}>
              <TableCell>texto estatico!!!</TableCell>
            </TableRow>
          ))}
          {productList.map((product, index) => (
            <Row
              product={product}
              key={index}
              provitionalDelete={provitionalDelete}
              token={token}
              updateFetchFunction={updateFetchFunction}
              //category={product}
              /*              category={product.category.name}
              description="2"
              name="2"
              price="2"
              stock="1"
              token="2"
              provitionalDelete={provitionalDelete}
              updateFetchFunction={updateFetchFunction}
              key={index} */
            />
          ))}

          {/*           {productList.length > 0 ? (
            productList.map((product, index) => (
              <TableRow key={index}>
                <TableCell>ejemplo estatico</TableCell>
              </TableRow>
            ))
          ) : (
            <>
              <TableRow>nada!</TableRow>
            </>
          )} */}

          {/* <Row 
              name={product.name} 
              key={index} 
              updateFetchFunction={updateFetchFunction} 
              description={product.description}
              stock={product.stock}
              price={product.price}
              category={product.category}
              provitionalDelete = {provitionalDelete}
              token={token} />
            ))
          ) : (
            <></>
          )} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
