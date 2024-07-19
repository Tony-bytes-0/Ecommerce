"use client";
import { useAppSelector } from "@/lib/hooks";
import { Grid } from "@mui/material";

const baseContainer = {
  marginTop: 50,
};
const Dashboard: React.FC = ({}) => {
  const token = useAppSelector((state) => state.sesionToken.token);
  return (
    <Grid container style={baseContainer}>
      {" "}
      {token !== "no" ? (
        <Grid item xs={12}>
          <h2>Logeado</h2>
        </Grid>
      ) : (
        <Grid item xs={12} style={baseContainer}>
          <h2>no tiene permiso para administrar el sitio</h2>
        </Grid>
      )}
    </Grid>
  );
};

export default Dashboard;
