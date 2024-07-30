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

interface propsUserList {
  userList: UserStandarData[];
}
interface TableComponentProps {
  user: UserStandarData;
}

const ReactToHtmlUserData: React.FC<TableComponentProps> = ({ user }) => {
  return (
    <div>
      <h2><b>Id: </b>{user.id}</h2>
      <h2><b>Email: </b>{user.email}</h2>
      <h2><b>fecha de creacion:</b> {user.createdAt}</h2>
      <h2><b>Rol asignado</b>{user.role}</h2>
      <br/>
      <b style={{borderBottom:'2px solid'}}>Datos de la persona</b>
      <br/><br/>
      <h2><b>Nombre completo: </b>{user.person.fullName}</h2>
      <h2><b>Numero telefónico: </b>{user.person.phoneNumber}</h2>
      <h2><b>País: </b>{user.person.country}</h2>
      <h2><b>Codigo postal: </b>{user.person.codePostal}</h2>
    </div>
  );
};

const showUserData = (user: UserStandarData) => {
  const renderedString = renderToString(<ReactToHtmlUserData user={user} />);
  Swal.fire({
    title:'Información detallada ',
    html: renderedString,
    showConfirmButton: true
  })
};

const Row: React.FC<TableComponentProps> = ({ user }) => {
  return (
    <TableRow
      key={user.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">{user.email}</TableCell>
      <TableCell align="center">{user.person.fullName}</TableCell>
      <TableCell align="center">{user.role}</TableCell>
      <TableCell align="center">
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button onClick={() => showUserData(user)}>
            <VisibilityIcon />
          </Button>
          <Button color="error" onClick={() => alert("borrar")}>
            <DeleteIcon />
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

const TableComponent: React.FC<propsUserList> = ({ userList }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Email</b>
            </TableCell>
            <TableCell align="center">
              <b>Nombre completo</b>
            </TableCell>
            <TableCell align="center">
              <b>Permisos</b>
            </TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.length > 0 ? (
            userList.map((user) => <Row user={user} key={user.id} />)
          ) : (
            <></>
          )}
          {userList.map((user) => (
            <Row user={user} key={user.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
