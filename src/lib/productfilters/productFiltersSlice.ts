import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Filter = {
  id: string;
  name: string;
}

const initialState: Filter = {
  id: "",
  name: "Todos los productos"
};

const productFiltersSlice = createSlice({
  name: "productFilters",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.name = action.payload.name;
    }
  },
});

export const { setFilter } = productFiltersSlice.actions;
export default productFiltersSlice.reducer;
