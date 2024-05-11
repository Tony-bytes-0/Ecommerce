import { Grid, Typography } from "@mui/material";



const Header = (props: {
  primaryColor: string;
  secundaryColor: string;
  defaultColor: string;
  borderBox: object;

}) => {
  const styles = {
    backgroundColor: props.primaryColor ? props.primaryColor : props.defaultColor,
    borderRadius: 15,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    padding: 5
  };

  return (
    <Grid item xs={12} sx={props.borderBox}>
      <Typography textAlign={"center"} fontSize={40}>
        Bienvenido a Ecommerce
      </Typography>
      <Typography textAlign={"center"} fontSize={30}>
        Inicio de sesión
      </Typography>
    </Grid>
  );
};

export default Header;
