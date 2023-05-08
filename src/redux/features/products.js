import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
});
export const { addProducts } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;

export default productSlice.reducer;
