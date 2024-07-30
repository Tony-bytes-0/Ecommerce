"use client";
import { postData } from "@/app/components/modalAlerts";
import { userRegex } from "@/app/components/userEndpoints";
import { BasicInputs } from "@/app/login/register/BasicInputs";
import { RegisterInputs } from "@/app/login/register/RegisterInputs";
import { baseDashboardContainer } from "@/app/types/common";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
//import { baseDashboardContainer } from 

const baseContainer = baseDashboardContainer;


const RegisterUserDashboard: React.FC<{ open: boolean }> = ({ open }) => {
  function validateInput(fieldName: string, input: string, regex: RegExp) {
    if (regex.test(input)) {
      //caso de que pasa la regex, añade el error a errorList y devuelve true
      if (errorList.includes(fieldName)) {
        setErrorList(errorList.filter((x) => x !== fieldName));
      }
      return true;
    } else {
      if (!errorList.includes(fieldName)) {
        setErrorList((prevErrorList) => [...prevErrorList, fieldName]);
      }
      return false;
    }
  }
  async function sendData() {
    const fullNameRegex = validateInput(
      "fullName",
      fullName,
      userRegex.fullName
    );
    const postalRx = validateInput(
      "postalCode",
      postalCode,
      userRegex.postalCode
    );
    const countryCodeRegex = validateInput(
      "country",
      country,
      userRegex.country
    );
    const phoneRegex = validateInput("phone", phone, userRegex.phone);
    if (fullNameRegex && postalRx && countryCodeRegex && phoneRegex) {
      console.log("lista de errores: ", errorList);
      postData(email, password, fullName, country, phone, postalCode);
    } else {
      console.log("lista de errores: ", errorList);
    }
  }
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setEmail(event.target.value);
    }
  };
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      const value = event.target.value;
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
      setFullname(filteredValue);
    }
  };
  const handlePostalCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      const value = event.target.value;
      const filteredValue = value.replace(/[^\d\b]/g, "");
      setPostalCode(filteredValue);
    }
  };
  const handleCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event && event.target) {
      const value = event.target.value;
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
      setCountry(filteredValue);
    }
  };
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      const value = event.target.value;
      const filteredValue = value.replace(/[^\d\b]/g, "");
      setPhone(filteredValue);
    }
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setPassword(event.target.value);
    }
  };
  const handleConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setConfirm(event.target.value);
    }
  };
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorList, setErrorList] = useState<string[]>([]);
  return (
    <Box sx={baseContainer}>
      <Grid container xs={12}>
        <BasicInputs
          email={email}
          handleEmail={handleEmail}
          password={password}
          handlePassword={handlePassword}
          confirm={confirm}
          handleConfirm={handleConfirm}
          errorList={errorList}
        />
        <RegisterInputs
          fullName={fullName}
          handleFullName={handleName}
          postalCode={postalCode}
          handlePostalCode={handlePostalCode}
          country={country}
          handleCountry={handleCountry}
          phone={phone}
          handlePhone={handlePhone}
          errorList={errorList}
        />
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="outlined"
            fullWidth
            //onClick={() => console.log("probando el boton")}
            onClick={() => sendData()}
          >
            <b>Crear usuario</b>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterUserDashboard;
