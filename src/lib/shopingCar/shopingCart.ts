import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item, ItemAndAmount } from "@/app/home/BodyInfoCards/ItemTypes";
import { ProductType } from "@/app/types/product";

const shopingCart = createSlice({
  name: "shopingCart",
  initialState: {
    productList: [] as ProductType[],
  },
  reducers: {
    addItem: (state, action: PayloadAction<ProductType>) => {
      state.productList.push(action.payload);
    },

    addAmountToItem: (state, action: PayloadAction<ItemAndAmount>) => {
      state.productList.map((product) => {
        if (product.id == action.payload.item.id) {
          product.stock = action.payload.amountToChange;
        } else {
          product;
        }
      });
    },
    deleteItem: (state, action: PayloadAction<Item>) => {
      state.productList = state.productList.filter((product) => product.id !== action.payload.id)
    },
    setCarState: (state, action) => {
      state.productList = action.payload;
    },
    clearCar: (state) => {
      state.productList = [];
    },
  },
});

export const { addItem, clearCar, addAmountToItem, setCarState, deleteItem } =
  shopingCart.actions;

export default shopingCart.reducer;
