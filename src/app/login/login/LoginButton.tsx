import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { getEnvColors } from "@/app/types/common";

type loginButton = {
  staticLogin: ( ) => void
};

export const LoginButton: React.FC<loginButton> = ({staticLogin}) => {
  const colors = getEnvColors();
  const buttonStyles = {
    background: colors.primaryColor,
    padding: 1.5,
  };
  return (
    <Grid item xs={12}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
      >
        <Button
          variant="outlined"
          sx={buttonStyles}
          onClick={staticLogin as () => void}
          fullWidth
        >
          <b>Iniciar Sesión</b>
        </Button>
      </Box>
      <Divider textAlign="center">
        <Typography sx={{ color: "#FFFFFF" }}>o</Typography>
      </Divider>
    </Grid>
  );
};
