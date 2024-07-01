import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserToken } from "@/app/types/userSesionToken";

const initialState: UserToken = {
  token: "no",
  user: {
    _id: "no",
    email: "",
    role: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
    person: {
      fullName: "",
      phoneNumber: "",
      codePostal: "",
      country: "",
    },
  },
};
const sesionToken = createSlice({
  name: "tokenContainer",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = sesionToken.actions;

export default sesionToken.reducer;
