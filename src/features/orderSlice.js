import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const order = {
        orderId: action.payload.orderId,
        items: action.payload.items,
        arrivalDate: action.payload.arrivalDate,
        total: action.payload.total,
        status: action.payload.status,
      };
      state.orders.push(order);
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
