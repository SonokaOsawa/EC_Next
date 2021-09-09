import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Item {
    id?: number,
    name?: string,
    des?: string,
    pm?: number,
    pl?: number,
    img?: string
}

const initialState: Item[] = [];

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setItems } = itemsSlice.actions;
export const selectItems = (state: RootState) => state.items;

export default itemsSlice.reducer;