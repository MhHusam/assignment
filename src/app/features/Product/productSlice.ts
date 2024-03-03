import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ProductShap {
  id: number;
  title: string;
  price: string;

  image: string;
  // description: string;
  // category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductsState {
  data: ProductShap[];
  fetchStatus: "pending" | "succeeded" | "failed";
}
//    func to fetch all products
export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async (apiUrl: string) => {
    try {
      //   a delay of two seconds for testing to  show skeleton of products
      await new Promise((resolve) => setTimeout(resolve, 2000));

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

const initialState: ProductsState = { data: [], fetchStatus: "pending" };

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.fetchStatus = "succeeded";
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.fetchStatus = "pending";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.fetchStatus = "failed";
      });
  },
});

export default productSlice.reducer;
