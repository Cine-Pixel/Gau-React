import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      return {
        items: [...state.items, action.payload],
      };
    },
    removeFromCart: (state, action) => {
      return {
        items: state.items.filter((product) => product.id !== action.payload),
      };
    },
    incrementCount: (state, action) => {
      return {
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item
        ),
      };
    },
    decrementCount: (state, action) => {
      return {
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, count: item.count - 1 } : item
        ),
      };
    },
  },
});

export const selectCartProducts = (state) => state.cart.items ?? [];

export const { addToCart, removeFromCart, incrementCount, decrementCount } =
  cartSlice.actions;

export default cartSlice.reducer;
