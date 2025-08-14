import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";

// addProduct api
export const addProduct = async (req, res, next) => {
  try {
    const {
      product_name,
      product_description,
      product_price,
      category,
      ...rest
    } = req.body;

    if (!product_name || !product_description || !product_price || !category) {
      return next(errorHandler(400, "Please fill in all required fields."));
    }

    // Handle images from multer
    const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
    if (imagePaths.length === 0) {
      return next(errorHandler(400, "At least one product image is required."));
    }

    // Create product
    const newProduct = new Product({
      product_name,
      product_description,
      product_price,
      product_images: imagePaths,
      category,
      created_by: req.user.id,
      details: rest, // dynamic category-specific fields
    });

    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    next(error);
  }
};
