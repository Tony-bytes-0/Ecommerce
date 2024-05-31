import React, { useState } from "react";
import { Item } from "@/app/home/BodyInfoCards/ItemTypes";
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

function CarItem(item: Item) {
  const dispatch = useAppDispatch();
  const [amountArray, setAmountArray] = useState(
    Array.from({ length: 10 }, (_, index) => index + 1)
  );
  const handleSelectChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    dispatch(
      addAmountToItem({ item: item, amountToChange: parseInt(selectedValue) })
    );
    handleSetAmount(item, parseInt(selectedValue));
  };
  const handleRemoveItem = (item: Item) => {
    dispatch(deleteItem(item));
    removeStorageItem(item);
  };

  return (
    <Box sx={MainBoxStyles}>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Image
          alt={item.name}
          src={item.imgUrl}
          width={240}
          height={75}
          style={imageStyles}
        />
      </Grid>

      <CustomTypgraphy text={item.name} />
      <CustomTypgraphy text={item.price * item.amount + " $"} />
      <Box>
        <Select
          defaultValue=""
          sx={selectorStyle}
          size="small"
          value={JSON.stringify(item.amount)}
          onChange={handleSelectChange}
        >
          {amountArray.map((e) => (
            <MenuItem value={e} key={item.id}>
              {e}
            </MenuItem>
          ))}
        </Select>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon fontSize="large" onClick={() => handleRemoveItem(item)} />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  );
}

export default CarItem;
