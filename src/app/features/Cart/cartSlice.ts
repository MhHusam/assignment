import { createSlice } from "@reduxjs/toolkit";

interface CartProduct {
  productId: string;
  quantity: number;
}

export interface CartState {
  cartProducts: CartProduct[];
  cartCount: number;
}

const initialState: CartState = {
  cartProducts: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts = [action.payload, ...state.cartProducts];
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.cartProducts.indexOf(action.payload);
      state.cartProducts.splice(indexOfId, 1);
    },
    clearAllItems: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions;

export default cartSlice.reducer;
