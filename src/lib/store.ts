import { configureStore } from "@reduxjs/toolkit";
import shopingCart from "@/lib/shopingCar/shopingCart";
import sesionToken from "@/lib/token/sesionToken";
import productFiltersSlice from "./productfilters/productFiltersSlice";
import simpleObjectReducer from "./productfilters/simpleObject";

export const makeStore = () => {
  return configureStore({
    reducer: {
      shopingCart: shopingCart,
      sesionToken: sesionToken,
      productFiltersSlice: productFiltersSlice,
      simpleObject: simpleObjectReducer
    },
  });
};
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

//export type RootState = ReturnType<typeof store.getState>;
//export type Dispatch = typeof store.dispatch;
//export default store
