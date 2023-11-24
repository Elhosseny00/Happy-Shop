import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "ProductHomeSlice/fetchProducts",
  async () => {
    const response = await fetch("/home.json");
    const data = await response.json();
    return data;
  }
);
export const fetchShopProducts = createAsyncThunk(
  "ProductHomeSlice/fetchShopProducts",
  async () => {
    const response = await fetch("/shop.json");
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "homeProducts",
  initialState: {
    products: [],
    shopProducts: [],
    status: "idle",
    shopStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchShopProducts.pending, (state) => {
        state.shopStatus = "loading";
      })
      .addCase(fetchShopProducts.fulfilled, (state, action) => {
        state.shopStatus = "succeeded";
        state.shopProducts = action.payload;
      })
      .addCase(fetchShopProducts.rejected, (state, action) => {
        state.shopStatus = "failed";
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
