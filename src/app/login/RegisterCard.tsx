import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { PersonAdd } from "@mui/icons-material";
const underLine = {
  textDecoration: "underline",
};

const RegisterCard = (props: {
  primaryColor: string;
  secundaryColor: string;
  defaultColor: string;
  borderBox: object;
}) => {
  const mainStyles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: props.secundaryColor,
    height: "100%",
    width: "100%",
    padding: 5,
    textAlign: "center",
    justifyContent: "center",
    jusitfyItems: "center",
  };
  const centrateText = {
    display: "flex",
    alignItems: "center", // Centra el contenido verticalmente
    justifyContent: "center", // Centra el contenido horizontalmente
    height: "100%",
  };
  const buttonStyles = {
    padding: 4,
    "&:hover": {
      backgroundColor: props.primaryColor, // Custom hover background color
    },
  };
  return (
    <Grid container xs={6}>
      <Box sx={mainStyles}>
        <Grid item xs={12}>
          <Box sx={props.borderBox}>
            <Typography fontSize={40}>No estas registrado?</Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={centrateText}>
            <Typography fontSize={30} /* sx={underLine} */>
              Click aqui para registrarte
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={centrateText}>
            <IconButton sx={buttonStyles}>
              <PersonAdd />
              Registrarse
            </IconButton>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default RegisterCard;
