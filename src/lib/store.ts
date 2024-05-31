import { configureStore } from "@reduxjs/toolkit";
import shopingCart from "@/lib/shopingCar/shopingCart";
import usurname from "@/lib/ModalLogin/usurname";
import password from "@/lib/ModalLogin/password"
const store = configureStore({
  reducer: { shopingCart: shopingCart, usurname: usurname, password: password },
})

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store
