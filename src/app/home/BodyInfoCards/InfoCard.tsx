"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useEffect, useState } from "react";
import { Item, ListOfItems } from "./ItemTypes";
import {
  getList,
  addStorageItem,
} from "@/app/navbar/shopingCar/comunFunctions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addAmountToItem, addItem } from "@/lib/shopingCar/shopingCart";
import esponsiveText from "./responsiveText";
import Image from "next/image";
import Link from "next/link";

const hoverExpand =
  "transition-transform duration-500 ease-in-out transform hover:scale-110 scrollBar";
  const showOverflow = "relative overflow-visible max-h-[300px] overflow-indicator "
type InfoCardTypes = {
  item: Item;
  xs: number;
  windowSize: { width: number; height: number };
};
const InfoCard: React.FC<InfoCardTypes> = ({ item, xs }) => {
  const dispatch = useAppDispatch();
  const [itemsInCar, setItemsInCar] = useState<ListOfItems>({ items: [] });
  const shopingCart = useAppSelector((state) => state.shopingCart);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  //const []

  const handleShow = () => {
    setExpanded(true);
  };
  const handleHide = () => {
    setExpanded(false);
  };
  const handleAdd = (): void => {
    if (
      shopingCart.items.filter((iterable: Item) => item.id === iterable.id)
        .length > 0
    ) {
      dispatch(addAmountToItem({ item: item, amountToChange: 1 }));
      addStorageItem(item);
    } else {
      dispatch(addItem(item));
      addStorageItem(item);
    }
  };

  useEffect(() => {
    setItemsInCar({ items: getList() });
  }, []); 

  useEffect(() => {
    setIsOverflowing(item.name.length > 10);
  }, [item.name.length]);
  return (
    <Grid item xs={xs} margin={2} padding={0}>
      <Box>
        <Card
          className={hoverExpand}
          component={"div"}
          style={{ maxHeight: "580px", minHeight: "380px" }}
        >
          <CardMedia>
            <Box
              sx={{ maxHeight: "380px", minHeight: "100px", display: "flex" }}
            >
              <Image src={item.imgUrl} alt="" width={10000} height={1000} />
            </Box>
          </CardMedia>
          <CardContent>
            <ThemeProvider theme={esponsiveText}>
              <Typography
                gutterBottom
                variant="h5"
                className={expanded ? hoverExpand + showOverflow : ""}
                sx={{
                  maxHeight: "40px",
                  minHeight: "40px",
                  overflow: "hidden",
                  textAlign: "center",
                  whiteSpace: expanded ? 'none' : 'nowrap', // Evita el envoltorio de texto
                  textOverflow: 'ellipsis', // Indica que el texto debe truncarse con puntos suspensivos
                }}
                onMouseEnter={handleShow}
                onMouseLeave={handleHide}
              >
                {item.name}
              </Typography>
            </ThemeProvider>
            <Typography
              variant="h6"
              color="text.secondary"
              className={expanded ? hoverExpand + showOverflow : ""}
              onMouseEnter={handleShow}
              onMouseLeave={handleHide}
              sx={{
                maxHeight: "30px",
                minHeight: "30px",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              {item.price + " $"}
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              display={"flex"}
              width={"20%"}
              justifyContent={"center"}
              alignContent={"center"}
              margin={"auto"}
            >
              <Button
                variant="contained"
                className="bg-blue-400"
                fullWidth
                onClick={handleAdd}
              >
                <ShoppingCartIcon />
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};
export default InfoCard;
