import { Grid } from "@mui/material";
import InputFragment from "./InputFragment";

type RegisterInputs = {
  fullName: string;
  handleFullName: Function;
  postalCode: string;
  handlePostalCode: Function;
  country: string;
  handleCountry: Function;
  phone: string;
  handlePhone: Function;
  errorList: string[];
};
const hints = {
  fullName: "El nombre debe tener menos de 50 caracteres",
  postalCode: "Numero entre 1 y 20 digitos",
  country: "El nombre del pais debe ser menor",
  phone: "Numero entre 1 y 20 digitos",
  //onlynumbers: 'Este campo solo puede contener'
};

export const RegisterInputs: React.FC<RegisterInputs> = ({
  fullName,
  handleFullName,
  postalCode,
  handlePostalCode,
  country,
  handleCountry,
  phone,
  handlePhone,
  errorList,
}) => {
  const mainGridStyles = {
    padding: 2,
  };

  return (
    <Grid item xs={12} sx={mainGridStyles}>
      <form noValidate autoComplete="off">
        <InputFragment
          handler={handleFullName}
          value={fullName}
          inputName="Nombre completo"
          error={errorList.includes("fullName")}
          hint={hints.fullName}
        />
        <InputFragment
          handler={handlePostalCode}
          value={postalCode}
          inputName="Código postal"
          error={errorList.includes("postalCode")}
          hint={hints.postalCode}
        />
        <InputFragment
          handler={handleCountry}
          value={country}
          inputName="País de residencia"
          error={errorList.includes("country")}
          hint={hints.country}
        />
        <InputFragment
          handler={handlePhone}
          value={phone}
          inputName="Número de teléfono"
          error={errorList.includes("phone")}
          hint={hints.phone}
        />
      </form>
    </Grid>
  );
};
