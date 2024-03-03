import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleCart = createAsyncThunk(
  "fetchSingleCart",
  async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
);

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
      state.cartCount += 1;
    },
    removeFromCart: (state, action) => {
      const indexOfId = state.cartProducts.indexOf(action.payload);
      state.cartProducts.splice(indexOfId, 1);
      state.cartCount -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCart.fulfilled, (state, action) => {
      state.cartProducts = action.payload.products;
    });
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
