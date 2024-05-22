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
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { createRef, useEffect, useRef, useState } from "react";
import { Item, ListOfItems } from "./ItemTypes";
import {
  getList,
  addStorageItem,
} from "@/app/navbar/shopingCar/comunFunctions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addAmountToItem, addItem } from "@/lib/shopingCar/shopingCart";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";

const hoverExpand =
  "transition-transform duration-500 ease-in-out transform hover:scale-110 scrollBar";
const InfoCard: React.FC<{ item: Item; xs: number }> = ({ item, xs }) => {
  const dispatch = useAppDispatch();
  const boxRef = createRef<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsInCar, setItemsInCar] = useState<ListOfItems>({ items: [] });
  const [cardHover, setCardHover] = useState(false);
  const shopingCart = useAppSelector((state) => state.shopingCart);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

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
  const handleMouseOver = () => {
    setCardHover(true);
  };

  const handleMouseOut = () => {
    setCardHover(false);
  };

  useEffect(() => {
    setItemsInCar({ items: getList() });

    if (boxRef.current) {
      const element = boxRef.current as HTMLDivElement;
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    }
  }, [boxRef]); // Asegúrate de que todas las dependencias necesarias estén aquí

  useEffect(() => {
    setIsOverflowing(item.name.length > 15);
  }, []);
  return (
    <Grid item xs={xs} margin={2} padding={0}>
      <Box ref={boxRef}>
        <Card
          className={hoverExpand}
          component={"div"}
          style={{ maxHeight: "280px", minHeight: "280px" }}
        >
          <CardMedia>
            <Box
              sx={{ maxHeight: "120px", minHeight: "120px", display: "flex" }}
            >
              <Image src={item.imgUrl} alt="" width={300} height={200} />
            </Box>
          </CardMedia>
          <CardContent>
            <Box ref={containerRef}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  maxHeight: "40px",
                  minHeight: "40px",
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {item.name}
                {isOverflowing ? (
                  <IconButton
                    onMouseEnter={handleShow}
                    onMouseLeave={handleHide}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                ) : (
                  <></>
                )}

                {expanded ? (
                  <Typography
                    sx={{
                      position: "absolute",
                      left: "30%",
                      top: "50%",
                      background: "#ffffff",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.name}
                  </Typography>
                ) : (
                  <></>
                )}
              </Typography>
            </Box>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxHeight: "30px",
                minHeight: "30px",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              {"Precio " + item.price + " $"}
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              display={"flex"}
              width={"90%"}
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
    </Grid>
  );
};
export default InfoCard;
