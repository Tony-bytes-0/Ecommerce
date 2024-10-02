import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "@/lib/hooks";
import { addAmountToItem, deleteItem } from "@/lib/shopingCar/shopingCart";
import { removeStorageItem, handleSetAmount } from "./comunFunctions";
import { ProductType } from "@/app/types/product";

const selectorStyle = {
  ul: {
    overflowY: "scroll",
  },
};
const imageStyles = {
  display: "block",
  margin: "auto",
};
const MainBoxStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  sx: { borderBottom: 2, width: "100%" },
};

const CustomTypgraphy = (props: any) => {
  return (
    <Typography
      fontSize={17}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      display={"flex"}
    >
      {props.text}
    </Typography>
  );
};

function CarItem(product: ProductType) {
  const dispatch = useAppDispatch();
  const [amountArray, setAmountArray] = useState(
    Array.from({ length: 10 }, (_, index) => index + 1)
  );
  const handleSelectChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    dispatch(
      addAmountToItem({ product: product, amountToChange: parseInt(selectedValue) })
    );
    handleSetAmount(product, parseInt(selectedValue));
  };
  const handleRemoveItem = (product: ProductType) => {
    dispatch(deleteItem(product));
    removeStorageItem(product);
  };

  return (
    <Box sx={MainBoxStyles}>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Image
          alt={product.name}
          //src={product.images[0].url} //arreglar imagen
          src=''
          width={240}
          height={75}
          style={imageStyles}
        />
      </Grid>

      <CustomTypgraphy text={product.name} />
      <CustomTypgraphy text={parseInt(product.price) * product.stock + " $"} />
      <Box>
        <Select
          defaultValue=""
          sx={selectorStyle}
          size="small"
          value={JSON.stringify(product.stock)}
          onChange={handleSelectChange}
        >
          {amountArray.map((e) => (
            <MenuItem value={e} key={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon fontSize="large" onClick={() => handleRemoveItem(product)} />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  );
}

export default CarItem;
