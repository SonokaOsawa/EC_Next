import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserSlice from "./user";
import ItemsSlice from "./items";
import CartSlice from "./cart";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    items: ItemsSlice,
    cart: CartSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;