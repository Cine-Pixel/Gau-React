import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartSlice from "../features/cart/cartSlice";
import productSlice from "../features/products/productSlice";

export const store = configureStore(
  {
    reducer: {
      products: productSlice,
      cart: cartSlice,
    },
  },
  applyMiddleware(thunk)
);
