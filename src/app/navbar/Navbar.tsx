"use client";
import { Button, Grid } from "@mui/material";
import SearchField from "@/app/navbar/SearchField";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";
import Car from "@/app/navbar/shopingCar/Car";
import HomeIconComponent from "./HomeIconComponent";
import User from "./user/User";
import Categorys from "./categorys/Categorys";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DrawerLeftNew from "./drawerLeft/newDrawer";
import { useAppSelector } from "@/lib/hooks";
import { UserToken } from "../types/userSesionToken";
import { getSesionData } from "../login/login/localUserData";

const MainGridStyles = {
  backgroundColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR,
  borderColor: process.env.NEXT_PUBLIC_SECONDARY_COLOR,
};
const linkStyles =
  "p-2 border-b-0 border-transparent transition-border-color duration-300 ease-in-out hover:border-b-8 hover:border-black hover-scale";
const mainContainerStyles = " fixed w-full min-w-full border-b-4 z-10"; //bg-gray-300 border-slate-400

const NavBar: React.FC = () => {
  const router = useRouter();
  const handleNavigate = (route: string) => {
    router.push(route);
  };
  const [sesionToken, setSesionToken] = useState<UserToken | undefined>(
    {} as UserToken
  );
  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 1000,
  });
  const logout = () => {
    setSesionToken({} as UserToken);
    console.log('ejecucion de la funcion logout')
  };

  useEffect(() => {
    const result = {
      token: getSesionData("sesionToken"),
      user: getSesionData("sesionUser"),
    };
    setSesionToken(result);
    console.log(result, " data recuperada de localstorage");
  }, []);

  return (
    <Grid
      container
      className={mainContainerStyles}
      paddingLeft={windowSize.width <= 800 ? 2 : 0}
      paddingRight={windowSize.width <= 800 ? 5 : 0}
      alignItems={"center"}
      sx={MainGridStyles}
    >
      {sesionToken?.token !== "no" ? <DrawerLeftNew /> : <></>}

      <Grid container item xs={6}>
        <HamburgerMenu windowSize={windowSize} xs={2} />
        <HomeIconComponent windowSize={windowSize} xs={3} />
        <Categorys windowsSize={windowSize} xs={6} />
      </Grid>
      <Grid container item xs={6} alignItems={"center"} alignContent={"center"}>
        <SearchField windowSize={windowSize} size={7} />
        <Car phone={false} linkStyles={linkStyles} size={2} />
        <User
          windowSize={windowSize}
          size={3}
          handleNavigate={handleNavigate}
          sesionToken={sesionToken}
          logout = {logout}
        />
        <button
          onClick={() =>
            console.log(
              getSesionData("sesionToken") + " data recuperada de lacreta"
            )
          }
        >
          LA CRRRETA
        </button>
      </Grid>
    </Grid>
  );
};

export default NavBar;
