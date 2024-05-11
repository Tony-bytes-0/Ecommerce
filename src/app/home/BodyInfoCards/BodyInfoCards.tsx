import { Grid } from "@mui/material";
import React from "react";
import { Item } from "./ItemTypes";
import InfoCard from "./InfoCard";

type HomeBodyType = {
  items: Item[],
  xs :number;
}

const BodyInfoCards: React.FC<HomeBodyType> = ({ items, xs }) => {
  return (
    <Grid container direction="row" justifyContent={"center"} /* padding={15} */ >
      {items.map((item, index) => (
        <InfoCard key={index} item={item} xs={xs} />
      ))}
    </Grid>
  );
};

export default BodyInfoCards;
