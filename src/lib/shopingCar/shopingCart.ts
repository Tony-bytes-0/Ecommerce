import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item, ItemAndAmount } from "@/app/home/BodyInfoCards/ItemTypes";

const shopingCart = createSlice({
  name: "shopingCart",
  initialState: {
    items: [] as Item[],
  },
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },

    addAmountToItem: (state, action: PayloadAction<ItemAndAmount>) => {
      state.items.map((product) => {
        if (product.id == action.payload.item.id) {
          product.amount = action.payload.amountToChange;
        } else {
          product;
        }
      });
    },
    deleteItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter((product) => product.id !== action.payload.id)
    },
    setCarState: (state, action) => {
      state.items = action.payload;
    },
    clearCar: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCar, addAmountToItem, setCarState, deleteItem } =
  shopingCart.actions;

export default shopingCart.reducer;
