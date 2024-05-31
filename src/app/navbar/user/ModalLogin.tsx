import Swal, { SweetAlertResult } from "sweetalert2";

type LoginFormResult = {
  username: HTMLInputElement | undefined;
  password: HTMLInputElement | undefined;
};
interface ModalLoginProps {
    hideModalLogin: () => void;
    handleSetModalData: (usurname: HTMLInputElement | undefined, password: HTMLInputElement | undefined) =>  void;
  }
const ModalLogin: React.FC<ModalLoginProps> = ({hideModalLogin, handleSetModalData}) => {
  let usernameInput: HTMLInputElement | undefined;
  let passwordInput: HTMLInputElement | undefined;

  Swal.fire<LoginFormResult>({
    title: "Ingresar",
    html: `
    <input type="text" id="username" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">
  `,
    confirmButtonText: "Ingresar",
    focusConfirm: true,
    didOpen: () => {
      const popup = Swal.getPopup()!;
      usernameInput = popup.querySelector("#username") as HTMLInputElement;
      passwordInput = popup.querySelector("#password") as HTMLInputElement;
      usernameInput.onkeyup = (event) =>
        event.key === "Enter" && Swal.clickConfirm();
      passwordInput.onkeyup = (event) =>
        event.key === "Enter" && Swal.clickConfirm();
    },
    preConfirm: () => {
      const username = usernameInput?.value;
      const password = passwordInput?.value;
      if (!username || !password) {
        Swal.showValidationMessage(`Please enter username and password`);
      }
      return { username, password };
    },
  }).then((result: SweetAlertResult<LoginFormResult>) => {
    hideModalLogin()
    if(result.value?.username && result.value.password){//ambos datos validos
        handleSetModalData(result.value?.username, result.value?.password)
    }
    console.log(result)//debug
  })
  return <></>
}

export default ModalLogin;
