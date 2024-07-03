import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        const item = {
          id: action.payload.id,
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        };
        state.items.push(item);
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const { addItem, removeItem } = cartItemSlice.actions;
export default cartItemSlice.reducer;
