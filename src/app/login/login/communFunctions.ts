import baseInstance from "@/app/api";
import {
  closeSwal,
  errorSwal,
  shortSuccess,
  showLoadingSpinner,
} from "../../components/modalAlerts";

export function dinamicLogin(
  email: string | HTMLInputElement,
  password: string | HTMLInputElement
): Promise<any> {
  return new Promise((resolve, reject) => {
    showLoadingSpinner("Ingresando...");
    const data = {
      //email: email.toLowerCase(),
      email: email,
      password: password,
    };
    baseInstance
      .post("/auth/login", {email, password})
      .then((response) => {
        console.log("response: ", response.data); // debug
        closeSwal();
        shortSuccess();
        // Resuelve la promesa con la respuesta
        resolve(response.data);
      })
      .catch((error) => {
        console.log("error capturado: ", error, email, password); // debug
        closeSwal();
        errorSwal();
        // Rechaza la promesa con el error
        reject(error);
      });
  });
}
export function evaluateRoleLoginAction(role: string) {
  if (role == "CLIENT") {
    console.log("usuario con rol cliente");
    return "/";
  } else if (role == "ADMIN") {
    console.log("usuario con rol de admin");
    return "/dashboard";
  } else {
    console.log("entrando al else");
    return "#";
  }
}
export function hasMoreThanOneProperty(obj: any) {
  return Object.keys(obj).length > 1;
}

export const tonyEmail = "tonygonzalezgarcia39@gmail.com";
export const tonyPassword = "Ecommerce1234$";
