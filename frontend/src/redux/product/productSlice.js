import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // will store all products fetched from database
  currentProduct: null, // latest added product
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // For adding a single product
    addProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addProductSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentProduct = action.payload;
      // Removed: state.products.push(action.payload); // No longer pushing to products array
    },
    addProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // NEW: For fetching all products
    getAllProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getAllProductsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload; // Replace entire products array with fetched data
    },
    getAllProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addProductStart,
  addProductSuccess,
  addProductFailure,
  getAllProductsStart,
  getAllProductsSuccess,
  getAllProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
