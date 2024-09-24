"use client";
import "./globals.css";
import { Grid } from "@mui/material";
import { Provider } from "react-redux";
import NavBar from "@/app/navbar/Navbar";
import { makeStore } from "@/lib/store";
import Footer from "./components/Footer";

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
  return (
    <html lang="en">
      <body>
        <nav>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </nav>
        <Grid container >
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
