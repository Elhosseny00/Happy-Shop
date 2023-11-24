import { createSlice } from "@reduxjs/toolkit";

const getItemLocalStorage = () => {
  const getItem = localStorage.getItem("cart");
  return getItem ? JSON.parse(getItem) : [];
};

const setItemLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getItemLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      setItemLocalStorage(state);
    },
    deleteProduct: (state, action) => {
      const updateCart = state.filter(
        (product) => product.id !== action.payload
      );
      setItemLocalStorage(updateCart);
      return updateCart;
    },
    increaseQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
      setItemLocalStorage(state);
    },
    decreaseQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
      setItemLocalStorage(state);
    },
    clearCart: () => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const {
  addToCart,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
