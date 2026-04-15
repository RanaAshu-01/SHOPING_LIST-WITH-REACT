import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/getLocation"

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});
