import {  createSlice } from "@reduxjs/toolkit";

const password = createSlice({
  name: "password",
  initialState: {
    password: ''
  },
  reducers: {
    mutatePassword: (state, action) => {
      return action.payload
    },
  },
});

export const { mutatePassword } =
  password.actions;

export default password.reducer;