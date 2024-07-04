import { ReactHTMLElement, useEffect, useState } from "react";
import { CreateAcc } from "./CreateAcc";
import { LoginButton } from "./LoginButton";
import LoginInput from "./LoginInput";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { dinamicLogin, redirectRole, tonyEmail, tonyPassword } from "./communFunctions";
import { setToken, setUser } from "@/lib/token/sesionToken";
import { LoginPromiseToken, UserToken } from "@/app/types/userSesionToken";
type loginType = {
  handler: () => void
}
const Login: React.FC<loginType> = ({handler}) => {
//const Login = ({ handler }: { handler: () => void }) => {
  const dispatch = useAppDispatch();
  const sesionToken = useAppSelector((state) => state.sesionToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setEmail(event.target.value);
    }
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setPassword(event.target.value);
    }
  };

  async function loginThenDispatch() {
    const localResponse = await dinamicLogin(email, password);
    const loginResult: LoginPromiseToken = localResponse;
    dispatch(setToken(loginResult.data.token));
    dispatch(setUser(loginResult.data.user));
    
  }
  async function autoLogin() {
    const localResponse = await dinamicLogin(tonyEmail, tonyPassword);
    const loginResult: LoginPromiseToken = localResponse;
    dispatch(setToken(loginResult.data.token));
    dispatch(setUser(loginResult.data.user));
    redirectRole(loginResult.data.user.role)
  }
  return (
    <>
      <LoginInput
        email={email}
        handleEmail={handleEmail}
        password={password}
        handlePassword={handlePassword}
      />
      <LoginButton staticLogin={() => loginThenDispatch()} />
      <CreateAcc handler={handler} text={"Registrarse"} />
      <Button onClick={() => autoLogin()}>AutoLogin</Button>
      <Button onClick={() => console.log("jwt: ", sesionToken)}>debug!</Button>
    </>
  );
};
export default Login;
