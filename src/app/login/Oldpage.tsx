import { Grid } from "@mui/material";
import React from "react";
import LoginInput from "./login/LoginInput";
import RegisterCard from "./RegisterCard";
import Footer from "../components/Footer";
//colors
const defaultGray = "#C1C1C1";

const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
  ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
  : defaultGray;
const secundaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR
  ? process.env.NEXT_PUBLIC_SECONDARY_COLOR
  : defaultGray;
const defaultColor = process.env.defaultColor
  ? process.env.defaultColor
  : defaultGray;
//communStyles
const borderBox = {
  backgroundColor: primaryColor ? primaryColor : defaultColor,
  borderRadius: 15,
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  padding: 3,
};
function Page() {
  const imageUrl = 'url("/public/icons/dark-color-blurred-background.jpg")';
  return (<>
    <Grid
      container
      display={'flex'}
      flexDirection={'column'}
      justifyItems={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "100%", height: "85vh", display: "flex" }}
      style={{
        backgroundImage: "url('/icons/dark-color-blurred-background.jpg')",
      }}
    >
      <Grid
        container
        justifyItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        flexDirection={"row"}
        sx={{ width: "80%" }}
        className="bg-opacity-50 bg-white shadow-lg"
        //alignItems={"center"}
        //className="flex flex-col items-center justify-center shadow-2xl p-20 bg-opacity-50 bg-white"
      >
        <LoginInput
          primaryColor={primaryColor}
          secundaryColor={secundaryColor}
          defaultColor={defaultColor}
          borderBox={borderBox}
        />
        <RegisterCard
          primaryColor={primaryColor}
          secundaryColor={secundaryColor}
          defaultColor={defaultColor}
          borderBox={borderBox}
        />
      </Grid>
      
    </Grid>
    <Footer name={'Ecommerce'} primaryColor={primaryColor} secundaryColor={secundaryColor} /></>
  );
}

export default Page;
