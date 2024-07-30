"use client";
import { baseDashboardContainer } from "@/app/types/common";
import { Box, Grid } from "@mui/material";
import TableComponent from "./TableComponent";
import { asyncFetchUsers } from "@/app/components/modalAlerts";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { UserStandarData } from "@/app/types/userSesionToken";

const ListUsersDashboard: React.FC = () => {
  const [welcome, setWelcome] = useState(true)
  const [listOfUsers, setUsers] = useState<UserStandarData[]>([]);
  const token = useAppSelector((state) => state.sesionToken.token);

  async function buscateLosUsuarios(){
    const esperate = await asyncFetchUsers(token)
    setUsers(esperate)
  }
  useEffect(() => {
    console.log('al inicio del use state welome es ', token)
    if(token == 'no'){
      console.log('deslogeado!')
    }
    else{
      if(welcome){
        setWelcome(false)
        buscateLosUsuarios()
      }
    }
  }, []);
  return (
    <Box sx={baseDashboardContainer}>
      <Grid item xs={12}>
        <TableComponent userList = {listOfUsers} />
      </Grid>
    </Box>
  );
};

export default ListUsersDashboard;
