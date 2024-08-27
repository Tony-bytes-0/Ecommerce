"use client";
import { baseDashboardContainer } from "@/app/types/common";
import { Box, Grid } from "@mui/material";
import TableComponent from "./TableComponent";
import { asyncFetchUsers } from "@/app/components/modalAlerts";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { UserStandarData } from "@/app/types/userSesionToken";
import InvalidCredentials from "../../InvalidCredentials";
import CustomTitleHeader from "@/app/components/TittleHeader";
import ElegantFont from "@/app/components/ElegantFont";

const ListUsersDashboard: React.FC = () => {
  const [welcome, setWelcome] = useState(true);
  const [listOfUsers, setUsers] = useState<UserStandarData[]>([]);
  const token = useAppSelector((state) => state.sesionToken.token);

  async function buscateLosUsuarios() {
    const esperate = await asyncFetchUsers(token);
    setUsers(esperate);
  }
  useEffect(() => {
    if (token == "no") {
      console.log("deslogeado!");
    } else {
      if (welcome) {
        setWelcome(false);
        buscateLosUsuarios();
      }
    }
  }, [buscateLosUsuarios, welcome, token]);
  return (
    <Box sx={baseDashboardContainer}>
      {
      //token !== "no" ? (
        <Grid item xs={12}>
          <CustomTitleHeader width="100%">
            <ElegantFont textColor="#FFFFFF">Usuarios</ElegantFont>
          </CustomTitleHeader>
          <Box sx={{margin:2}}></Box>
          <TableComponent userList={listOfUsers} activeToken={token} />
        </Grid>
      /* ) : (
        <InvalidCredentials />
      ) */}
    </Box>
  );
};

export default ListUsersDashboard;
