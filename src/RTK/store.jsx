import { configureStore } from "@reduxjs/toolkit";
import homeProducts, { fetchProducts,  } from "./Slices/ProductHomeSlice";
import cartslice from "./Slices/Cart";
export const store = configureStore({
  reducer: {
    products: homeProducts,
    cart: cartslice,
  },
});
store.dispatch(fetchProducts());
