"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableProducTypeList } from "@/app/types/product";
import TableRowProductList from "./TableRow";

const TableComponent: React.FC<TableProducTypeList> = ({
  productList,
  updateFetchFunction,
  provitionalDelete,
  token,
  handleOpenModal,
  handleCloseModal,
  updateFormFields,
  updateHandler,
  updateSelectorHandler,
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
            <TableCell align="center">
              <b>Acciones</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((product, index) => (
            <TableRowProductList
              handleCloseModal={handleCloseModal}
              handleOpenModal={handleOpenModal}
              product={product}
              key={index}
              provitionalDelete={provitionalDelete}
              token={token}
              updateFetchFunction={updateFetchFunction}
              updateFormFields={updateFormFields}
              updateHandler={updateHandler}
              updateSelectorHandler={updateSelectorHandler}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
