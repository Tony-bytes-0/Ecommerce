"use client";
import "./globals.css";
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
//redux
import NavBar from "@/app/navbar/Navbar";
import { ListOfItems } from "./home/BodyInfoCards/ItemTypes";
//static
import { staticItems } from "@/app/types/staticObjects";
//import store from "@/lib/store";
import { makeStore } from "@/lib/store";
import Footer from "./components/Footer";
import { useAppSelector } from "@/lib/hooks";

const defaultGray = "#C1C1C1";

const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
  ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
  : defaultGray;
const secundaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR
  ? process.env.NEXT_PUBLIC_SECONDARY_COLOR
  : defaultGray;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = makeStore();
  const [carItems, setCarItems] = useState<ListOfItems>({ items: [] });
  const [items, setItems] = useState(staticItems);

  return (
    <html lang="en">
      <body>
        <nav>
          <Provider store={store}>
            <NavBar
              //windowSize={windowSize}
              carItems={carItems}
            />
          </Provider>
        </nav>
        <Grid container>
          <Provider store={store}> {children} </Provider>
          <Footer
            name={"Ecommerce"}
            primaryColor={primaryColor}
            secundaryColor={secundaryColor}
          />
        </Grid>
      </body>
    </html>
  );
}
