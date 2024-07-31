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
    timer: 200,
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
//users api

export async function asyncDeleteUserById(id, token){
  try{
    showLoadingSpinner("Listando usuarios");
    const response = await baseInstance.delete("/user/"+id , {
      headers: { Authorization: `Bearer ${token}`, },
    });
    shortSuccess();
    return response.data;
  }
  catch(error){
    console.log(error);
    errorSwal();
  }
  finally{
    closeSwal();
  }
}

export async function asyncFetchUsers(token) {
  try {
    showLoadingSpinner("Listando usuarios");
    const response = await baseInstance.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    closeSwal();
    shortSuccess();
    return response.data;
  } catch (error) {
    console.log(error);
    closeSwal();
    errorSwal();
    return [];
  }
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
// category api

