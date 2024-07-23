import baseInstance from "../api";
import { closeSwal, errorSwal, showLoadingSpinner, success } from "./modalAlerts";

export const userRegex = {
  email: /^([a-zA-Z0-9._%+-]{1,50})@(?:(?:[a-zA-Z0-9.-]+\.)?[a-zA-Z]{2,})$/,
  password: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  fullName: /^.{1,50}$/,
  postalCode: /^.{1,10}$/,
  phone: /^\d{1,20}$/,
  country: /^.{1,20}$/,
  onlyNumbers: /^\d+$/,
  onlyChar: /^[A-Za-z]+$/,
};
export function postData(
    email: string,
    password: string,
    fullName: string,
    country: string,
    phoneNumber: string,
    codePostal: string
  ) {
    const data = {
      email: email,
      password: password,
      person: {
        fullName: fullName,
        country: country,
        phoneNumber: phoneNumber,
        codePostal: codePostal,
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

