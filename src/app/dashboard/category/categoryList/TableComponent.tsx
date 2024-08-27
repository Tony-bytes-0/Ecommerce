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
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import {
  CategoryType,
  propsCategoryList,
} from "@/app/dashboard/category/categoryList/types";
import UpdateInput from "../add/UpdateInput";
import { baseDelete, basePut } from "@/app/helpers/baseApiRequest";
import CustomAddNewItem from "@/app/components/CustomAddNewItem";
import CategoryIcon from "@mui/icons-material/Category";

const Row: React.FC<CategoryType> = ({
  name,
  updateFetchFunction,
  _id,
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

  async function updateCategory(_id: string, token: string) {
    //console.log('estoy enviando esto: ', {name: update}, "/category/" + _id ) //debug
    basePut(
      "/category/" + _id,
      token,
      { name: update },
      "Actualizando categoria, no cierre esta pestaña ni recargue la pagina"
    ).then(() => {
      updateFetchFunction();
    });
  }

  async function deleteCategory(_id: string, token: string) {
    Swal.fire({
      title: "Borrar categoria?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, estoy seguro",
      denyButtonText: `no, volver`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    baseDelete(
      "/category/" + _id,
      token,
      "Eliminando, no cierre esta pestaña"
    ).then(() => {
      updateFetchFunction();
    });
  }

  return (
    <TableRow
      //key={user.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button onClick={() => toggleModal()}>
            <EditIcon />
          </Button>
          <Button color="error" onClick={() => deleteCategory(_id, token)}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </TableCell>
{/*       <UpdateInput
        newValue={update}
        handler={handleUpdate}
        modal={updateModal}
        handleClose={toggleModal}
        addFunction={() => updateCategory(_id, token)}
        token={token}
        buttonText={"Editar"}
      /> */}
      <CustomAddNewItem
        item={update}
        itemName={"Nuevo nombre"}
        itemProperty="Nombre de la categoria"
        handler={handleUpdate}
        modal={updateModal}
        handleClose={toggleModal}
        addFunction={() => updateCategory(_id, token)}
        buttonText={"Editar"}
        icon={<CategoryIcon />}
      />
    </TableRow>
  );
};

const TableComponent: React.FC<propsCategoryList> = ({
  categoryList,
  updateFetchFunction,
  token,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Nombre</b>
            </TableCell>
            <TableCell align="center">
              <b>Acciones</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryList.length > 0 ? (
            categoryList.map((category, index) => (
              <Row
                _id={category._id}
                name={category.name}
                key={index}
                updateFetchFunction={updateFetchFunction}
                token={token}
              />
            ))
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
