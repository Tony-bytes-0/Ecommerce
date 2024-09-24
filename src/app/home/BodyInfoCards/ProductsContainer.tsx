import { Grid } from "@mui/material";
import React from "react";
import { Item } from "./ItemTypes";
import InfoCard from "./InfoCard";
import { ProductType } from "@/app/types/product";

interface Props {
  products: ProductType[];
  xs: number;
}

const BodyInfoCards: React.FC<Props> = ({ products, xs }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"} 
      /* padding={15} */
      minHeight={'100vh'} //por si esta vacio...
    >
      { 
        products.map((e) => (
          <InfoCard key = {e.id} product={e} xs={xs} /> 
        ))
      }
{/*       {items.map((item, index) => (
        <InfoCard key={index} item={item} xs={xs} windowSize = {windowSize} />
      ))} */}
    </Grid>
  );
};

export default BodyInfoCards;
