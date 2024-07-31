import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const InvalidCredentials: React.FC = () => {
  const router = useRouter();
  return (
    <Grid item xs={12} sx={{ margin: 20 }}>
      <Typography
        style={{ color: "#ff0000" }}
        fontSize={24}
        textAlign={"center"}
      >
        <h1>
          Usuario no autorizado para ver esta pagina, por favor inicie sesion
        </h1>
        <Box
          sx={{
            justifyContent: "center",
            padding: 10,
            alignItems: "center",
            alignContent: "center",
            display: "flex",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => router.replace('/login')}
              sx={{ padding: 5 }}
            >
              <b>Ingresar</b>
            </Button>
          </Box>
        </Box>
      </Typography>
    </Grid>
  );
};

export default InvalidCredentials;
