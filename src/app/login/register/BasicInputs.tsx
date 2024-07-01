import { Grid } from "@mui/material";
import InputFragment from "./InputFragment";


type RegisterInputs = {
  email: string;
  handleEmail: Function;
  password: string;
  handlePassword: Function;
  confirm: string;
  handleConfirm: Function;
  errorList: string[];
};

const hints = {
  email: 'estructura de correo electrónico incorrecta',
  password:'la contraseña debe contener al menos, ocho (8) caracteres, una mayuscula y un número',
  confirm:'las contraseñas no son iguales'
}

export const BasicInputs: React.FC<RegisterInputs> = ({
  email,
  handleEmail,
  password,
  handlePassword,
  confirm,
  handleConfirm,
  errorList
}) => {
  const mainGridStyles = {
    padding: 2,
  };

  return (
    <Grid item xs={12} sx={mainGridStyles}>
      <form noValidate autoComplete="off">
        <InputFragment
          handler={handleEmail}
          value={email}
          inputName="Correo electrónico"
          error={errorList.includes("email")}
          hint={hints.email}
        />
        <InputFragment
          handler={handlePassword}
          value={password}
          inputName="Contraseña"
          error={errorList.includes("password")}
          hint={hints.password}
        />
        <InputFragment
          handler={handleConfirm}
          value={confirm}
          inputName="Volver a ingresar contraseña"
          error={errorList.includes("confirm")}
          hint={hints.confirm}
        />
      </form>
    </Grid>
  );
};
