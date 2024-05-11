import { configureStore } from "@reduxjs/toolkit";
import shopingCart from "@/lib/shopingCar/shopingCart";

const store = configureStore({
  reducer: { shopingCart: shopingCart },
})

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store
