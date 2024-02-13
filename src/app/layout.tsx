"use client";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import { Grid } from "@mui/material";
import { useRef } from "react";
import { Provider } from "react-redux";
//redux
import { makeStore, AppStore } from "@/lib/store";
import NavBar from "@/app/navBar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return (
    <html lang="en">
      <body>
        <nav>
          <NavBar />
        </nav>
        <Grid container className="my-10 mx-6">
            <Provider store={storeRef.current}> {children} </Provider>
        </Grid>
      </body>
    </html>
  );
}
