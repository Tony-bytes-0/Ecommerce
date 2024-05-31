import {  createSlice } from "@reduxjs/toolkit";

const usurname = createSlice({
  name: "usurname",
  initialState: {
    usurname: ''
  },
  reducers: {
    mutateUsurname: (state, action) => {
      return action.payload
    },
  },
});

export const { mutateUsurname } =
  usurname.actions;

export default usurname.reducer;