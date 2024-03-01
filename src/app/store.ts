import { configureStore, combineReducers } from "@reduxjs/toolkit";

import productSlice from "./features/Product/productSlice";
import cartSlice from "./features/Cart/cartSlice";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
});
export const store = configureStore({ reducer: rootReducer, devTools: true });
