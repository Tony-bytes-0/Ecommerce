import Swal from "sweetalert2";
import baseInstance from "../api";

export const success = () => {
  Swal.fire({
    title: "¡Listo!",
    text: "El usuario fue creado con exito",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
};

export const shortSuccess = () => {
  Swal.fire({
    icon: "success",
    showConfirmButton: false,
    timer: 1000,
  });
};

export const shortError = () => {
  Swal.fire({
    icon: "error",
    confirmButtonText: "Ok",
    showConfirmButton: true,
  });
};

export const errorSwal = () => {
  Swal.fire({
    title: "¡Oops!",
    text: "Ocurrio un error",
    icon: "error",
    confirmButtonText: "Oh",
  });
};

export const showLoadingSpinner = (msg) => {
  Swal.fire({
    title: msg,
    // html: 'Please wait...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export const closeSwal = () => {
  Swal.close();
};

export function logoutConfirm(handler) {
  let response = false;
  Swal.fire({
    title: "Cerrar sesión",
    showDenyButton: true,
    showConfirmButton: true,
    confirmButtonText: "Seguir conectado",
    denyButtonText: `cerrar sesión`,
  }).then((result) => {
    if (result.isDenied) {
      handler();
    }
  });
  return response;
}

export function postData(
  email,
  password,
  fullName,
  country,
  phoneNumber,
  codePostal
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

async function sendData() {
  //la vez que pedi el falfel -----------------------------------------------------------------------------------
  const fullNameRegex = validateInput("fullName", fullName, regexs.fullName);
  const postalRx = validateInput("postalCode", postalCode, regexs.postalCode);
  const countryCodeRegex = validateInput("country", country, regexs.country);
  const phoneRegex = validateInput("phone", phone, regexs.phone);
  if (fullNameRegex && postalRx && countryCodeRegex && phoneRegex) {
    alert("QUE JUEGO HIZO WILLYREX!!!");
    console.log("lista de errores: ", errorList);
    postData(email, password, fullName, country, phone, postalCode);
  } else {
    console.log("algo no funciono!");
    console.log("lista de errores: ", errorList);
  }
}