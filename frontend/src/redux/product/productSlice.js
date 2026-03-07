import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // will store all products fetched from database
  currentProduct: null, // will store single product details
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
    },
    addProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // For fetching all products
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

    // For fetching single product by ID
    getProductByIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductByIdSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentProduct = action.payload; // Set the single product details
    },
    getProductByIdFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Clear current product (optional)
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
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
  getProductByIdStart,
  getProductByIdSuccess,
  getProductByIdFailure,
  clearCurrentProduct,
} = productSlice.actions;

export default productSlice.reducer;
