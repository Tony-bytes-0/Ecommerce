import { useState } from "react";
import { CreateAcc } from "../login/CreateAcc";
import Header from "./Header";
import { RegisterButton } from "./RegisterButton";
import { RegisterInputs } from "./RegisterInputs";
import { BasicInputs } from "./BasicInputs";
import { Button, Grid, Slide } from "@mui/material";
import {
  success,
  showLoadingSpinner,
  errorSwal,
  closeSwal,
} from "../modalAlerts";
//axios
import baseInstance from "@/app/api";

const regexs = {
  //email: /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9.-]+\.)+com$/,
  //password: /^(?=.*[A-Z])(?=.*\d).{9,}$/,
  email: /^([a-zA-Z0-9._%+-]{1,50})@(?:(?:[a-zA-Z0-9.-]+\.)?[a-zA-Z]{2,})$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/,
  fullName: /^.{1,50}$/,
  postalCode: /^.{1,10}$/,
  phone: /^\d{1,20}$/,
  country: /^.{1,20}$/,
};

const Register = ({ handler }: { handler: () => void }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setEmail(event.target.value);
    }
  };
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setFullname(event.target.value);
    }
  };
  const handlePostalCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setPostalCode(event.target.value);
    }
  };
  const handleCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event && event.target) {
      setCountry(event.target.value);
    }
  };
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setPhone(event.target.value);
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
  const [firstStep, setFirstStep] = useState(true);
  const [secoundStep, setSecoundStep] = useState(false);
  const [errorList, setErrorList] = useState<string[]>([]);
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
  function comparePasswords() {
    if (password == confirm) {
      if (errorList.includes("confirm")) {
        setErrorList(errorList.filter((x) => x !== "confirm"));
      }
      return true;
    } else {
      setErrorList((prevErrorList) => [...prevErrorList, "confirm"]);
      return false;
    }
  }
  const pageOne = () => {
    setFirstStep(true);
    setTimeout(() => {
      setSecoundStep(false);
    }, 490);
  };
  const pageTwo = () => {
    if (
      validateInput("email", email, regexs.email) == true &&
      validateInput("password", password, regexs.password) == true &&
      comparePasswords()
      //1 == 1
    ) {
      setSecoundStep(true);
      setTimeout(() => {
        setFirstStep(false);
      }, 490);
    }
  };
  async function sendData() {
    const fullNameRegex = validateInput("fullName", fullName, regexs.fullName);
    const postalRx = validateInput("postalCode", postalCode, regexs.postalCode);
    const countryCodeRegex = validateInput("country", country, regexs.country);
    const phoneRegex = validateInput("phone", phone, regexs.phone);
    console.log(
      "resultado de los regex ",
      fullNameRegex,
      phoneRegex,
      countryCodeRegex,
      postalRx
    );
    if (fullNameRegex && postalRx && countryCodeRegex && phoneRegex) {
      console.log("si funciona");
      console.log('lista de errores: ', errorList)
    } else {
      console.log("algo no funciono!");
      console.log('lista de errores: ', errorList)
    }
    /*     console.log('resultado de country', validateInput("country", country, regexs.country))
    console.log('resultado de country', validateInput("postalCode", postalCode, regexs.postalCode))
    console.log('resultado de phone', validateInput("phone", phone, regexs.phone)) */
    /*
      const data = {
        email: email,
        password: password,
        person: {
          fullName: fullName,
          country: country,
          phoneNumber: phone,
          codePostal: postalCode,
        },
      };
      console.log("datos a enviar: ", data);
      showLoadingSpinner("Subiendo...");
      baseInstance
        .post("/user/", data)
        .then((response) => {
          console.log(" la respuesta del envio: ", response.data);
          closeSwal();
          success();
        })
        .catch((error) => {
          console.error("Error: ", error);
          closeSwal();
          errorSwal();
        });
    }
        */
    // AQUI ES DONDE ESTA EL CACAOOOOOO ---------------------------------

    //return data;
  } // AQUI ES DONDE ESTA EL CACAOOOOOO -------------------------------------------------------------
  return (
    <>
      <Header />
      <Slide
        in={firstStep}
        container={null}
        direction="left"
        mountOnEnter
        unmountOnExit
      >
        <Grid item xs={12}>
          <BasicInputs
            email={email}
            handleEmail={handleEmail}
            password={password}
            handlePassword={handlePassword}
            confirm={confirm}
            handleConfirm={handleConfirm}
            errorList={errorList}
          />
        </Grid>
      </Slide>
      <Button onClick={() => console.log(errorList)}>ver la wea</Button>
      <Slide
        in={secoundStep}
        container={null}
        direction="right"
        mountOnEnter
        unmountOnExit
      >
        <Grid item xs={12}>
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
        </Grid>
      </Slide>
      {firstStep ? (
        <RegisterButton
          action={handler}
          text={"Atras"}
          secoundAction={pageTwo}
          secoundText="Siguiente"
        />
      ) : (
        <RegisterButton
          action={pageOne}
          text={"Atras"}
          secoundAction={sendData}
          secoundText="Finalizado"
        />
      )}

      <CreateAcc handler={handler} text={"Iniciar Sesión"} />
    </>
  );
};

export default Register;
