import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../features/cartItemSlice";
import orderReducer from "../features/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartItemReducer,
    orders: orderReducer,
  },
});
