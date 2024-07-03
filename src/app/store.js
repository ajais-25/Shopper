import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../features/cart/cartItemSlice";

export const store = configureStore({
  reducer: cartItemReducer,
});
