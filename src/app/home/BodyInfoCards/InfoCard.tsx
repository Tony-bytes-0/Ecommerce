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
import React, { createRef, useEffect, useState } from "react";
import { Item, ListOfItems } from "./ItemTypes";
import {
  getList,
  addStorageItem,
} from "@/app/navbar/shopingCar/comunFunctions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addAmountToItem, addItem } from "@/lib/shopingCar/shopingCart";
import Image from "next/image";

const hoverExpand =
  "transition-transform duration-500 ease-in-out transform hover:scale-110 scrollBar";
const InfoCard: React.FC<{ item: Item; xs: number }> = ({ item, xs }) => {
  const dispatch = useAppDispatch();
  const boxRef = createRef<HTMLDivElement>();
  const [itemsInCar, setItemsInCar] = useState<ListOfItems>({ items: [] });
  const [cardHover, setCardHover] = useState(false);
  const shopingCart = useAppSelector((state) => state.shopingCart);
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
    const handleMouseOver = () => {
      setCardHover(true);
    };

    const handleMouseOut = () => {
      setCardHover(false);
    };

    if (boxRef.current) {
      const element = boxRef.current as HTMLDivElement; // Aserción de tipo
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    }

    // Limpiar los event listeners al desmontar el componente
    return () => {
      if (boxRef.current) {
        const element = boxRef.current as HTMLDivElement; // Aserción de tipo
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  return (
    <Grid item xs={xs} margin={2} padding={0}>
      <Box ref={boxRef}>
        <Card
          className={hoverExpand}
          component={"div"}
          style={{ maxHeight: "300px", minHeight: "300px" }}
        >
          <CardMedia
            sx={{ objectFit: "cover", maxHeight: "150px", minHeight: "150px" }}
            component="img"
            image={item.imgUrl}
            style={{ objectFit: "cover" }}
          />
          <CardContent >
              <Typography gutterBottom variant="h6" component="div" sx={{  maxHeight: "30px", minHeight: "30px", overflow: "hidden"}}>
                {item.name}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {"Precio " + item.price + " $"}
              </Typography>
          </CardContent>
          <CardActions>
            <Box
              display={"flex"}
              width={"90%"}
              //position={"fixed"}
              //bottom={"3%"}
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
                añadir
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
      {/* <Box
        ref={boxRef}
        className={hoverExpand}
        sx={{
          width: "100%", // Asegura que el Box ocupe todo el ancho disponible
          height: "100%", // Asegura que el Box ocupe todo el alto disponible
          objectFit: "contain", // Ajusta la imagen para que se contenga dentro del Box
          minHeight:"300px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box sx = {{
          width:"100%",
          height: "80%"
        }}>
          <Image
            alt=""
            src={item.imgUrl}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          display={"flex"}
          height={"20%"}
          justifyContent={"center"}
          alignContent={"center"}
          margin={"auto"}
        >
          <Button
            variant="contained"
            fullWidth
            className="bg-blue-400"
            onClick={handleAdd}
          >
            <ShoppingCartIcon />
            añadir
          </Button>
        </Box>
      </Box> */}
    </Grid>
  );
};

export default InfoCard;
