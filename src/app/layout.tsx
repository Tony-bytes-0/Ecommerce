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
import store from "@/lib/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 1000,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [carItems, setCarItems] = useState<ListOfItems>({ items: [] });
  const [items, setItems] = useState(staticItems);

  return (
    <html lang="en">
      <body>
        <nav>
          <Provider store={store}>
            <NavBar windowSize={windowSize} carItems={carItems} />
          </Provider>
        </nav>
        <Grid container>
          <Provider store={store}> {children} </Provider>
        </Grid>
      </body>
    </html>
  );
}
