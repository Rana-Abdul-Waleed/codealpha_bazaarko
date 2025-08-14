import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // will store added products (if needed later)
  currentProduct: null, // latest added product
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addProductSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentProduct = action.payload;
      state.products.push(action.payload); // optional, keeps list
    },
    addProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addProductStart, addProductSuccess, addProductFailure } =
  productSlice.actions;

export default productSlice.reducer;
