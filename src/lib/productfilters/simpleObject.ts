import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Tipo para el estado
interface SimpleObject {
  id: string;
  name: string;
}

// Estado inicial
const initialState: SimpleObject = {
  id: '',
  name: 'Todos los productos'
};

// Creación del slice
const simpleObjectSlice = createSlice({
  name: 'simpleObject',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setObject: (state, action: PayloadAction<SimpleObject>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    }
  },
});

// Exportación de las acciones
export const { setId, setName, setObject } = simpleObjectSlice.actions;

// Exportación del reducer
export default simpleObjectSlice.reducer;