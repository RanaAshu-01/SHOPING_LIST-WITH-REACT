import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/getLocation"
import cartItems from './slices/cartItems'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    cart: cartItems
  },
});
