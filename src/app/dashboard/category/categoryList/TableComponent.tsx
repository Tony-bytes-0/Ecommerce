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
import { UserStandarData } from "@/app/types/userSesionToken";
import Swal from "sweetalert2";
import { renderToString } from "react-dom/server";
import { asyncDeleteUserById } from "@/app/components/modalAlerts";
import { CategoryType } from "@/app/types/category";

interface propsCategoryList {
    categoryList: CategoryType[]
    token: string
}

const Row: React.FC<CategoryType> = ({ name }) => {
    return (
      <TableRow
        //key={user.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button onClick={() => alert('Ver detalles')}>
              <VisibilityIcon />
            </Button>
            <Button color="error" onClick={() => alert('borrar categoria')}>
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    );
  };
  
  const TableComponent: React.FC<propsCategoryList> = ({ categoryList }) => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Nombre</b>
              </TableCell>
              <TableCell align="center"><b>Acciones</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryList.length > 0 ? (
              categoryList.map((category, index) => <Row name={category.name} key={index} />)
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default TableComponent;