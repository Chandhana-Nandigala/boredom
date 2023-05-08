import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: {},
};
export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      console.log("complete");
      return { ...state, products: payload };
    },
    [fetchAsyncProducts.rejected]: () => {
      console.log("rejected");
    },
  },
});
export const { addProducts } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;

export default productSlice.reducer;
