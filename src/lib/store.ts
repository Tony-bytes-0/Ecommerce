import { configureStore } from "@reduxjs/toolkit";
import shopingCart from "@/lib/shopingCar/shopingCart";
import usurname from "@/lib/ModalLogin/usurname";
import password from "@/lib/ModalLogin/password"

export const makeStore = () => {
  return configureStore({
    reducer: { shopingCart: shopingCart, usurname: usurname, password: password },
  })
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

  

//export type RootState = ReturnType<typeof store.getState>;
//export type Dispatch = typeof store.dispatch;
//export default store
