import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    product_description: {
      type: String,
      required: true,
    },
    product_price: {
      type: String,
      required: true,
    },
    product_images: {
      type: [String], // array of image URLs
      required: true,
    },
    brand: {
      type: String,
    },
    stock_quantity: {
      type: String,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "mobile",
        "cosmetics",
        "electronics",
        "furniture",
        "watches",
        "decor",
        "accessories",
        "footwear",
      ],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Category-specific details (flexible)
    details: {
      type: mongoose.Schema.Types.Mixed, // allows different structures
      default: {},
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
