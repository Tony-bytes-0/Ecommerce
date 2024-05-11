"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useEffect, useState } from "react";
import { Item, ListOfItems } from "./ItemTypes";
import {
  getList,
  addStorageItem
} from "@/app/navbar/shopingCar/comunFunctions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addAmountToItem, addItem } from "@/lib/shopingCar/shopingCart";

const hoverExpand =
  "transition-transform duration-500 ease-in-out transform hover:scale-110";
const InfoCard: React.FC<{ item: Item, xs: number }> = ({ item, xs }) => {
  const [itemsInCar, setItemsInCar] = useState<ListOfItems>({ items: [] });
  const dispatch = useAppDispatch()
  const shopingCart = useAppSelector((state) => state.shopingCart)
  const handleAdd = (): void => {
    if(shopingCart.items.filter((iterable: Item) => item.id === iterable.id ).length > 0){
      dispatch(addAmountToItem({item: item, amountToChange: 1}))
      addStorageItem(item)
    }
    else{
      dispatch(addItem(item))
      addStorageItem(item)
    }
  }

  useEffect(() => {
    setItemsInCar({ items: getList() });
  }, []);
  return (
    <Grid item xs={xs} margin={2} padding={0}>
      <Card className={hoverExpand} component={"div"}>
        <CardMedia
          component="img"
          image={item.imgUrl}
          alt={item.name}
          height={300}
          width={300}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {"Precio " + item.price + " $"}
          </Typography>
        </CardContent>
        <CardActions>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            margin={"auto"}
          >
            <Button
              variant="contained"
              className="bg-blue-400"
              onClick={handleAdd}
            >
              <ShoppingCartIcon />
              añadir
            </Button>

          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default InfoCard;
