import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";

// addProduct api
export const addProduct = async (req, res, next) => {
  try {
    const {
      product_name,
      product_description,
      product_price,
      product_discounted_price,
      category,
      ...rest
    } = req.body;

    if (
      !product_name ||
      !product_description ||
      !product_price ||
      !product_discounted_price ||
      !category
    ) {
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
      product_discounted_price,
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

// Get All Products (Latest Updated First)
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}).sort({ updatedAt: -1 }).exec();

    // Prefer a configured server base URL (useful when Host header is unreliable due to proxy).
    // If not set, fall back to request host.
    const baseUrl =
      process.env.SERVER_URL || `${req.protocol}://${req.get("host")}`;

    // Convert relative image paths to absolute URLs (but don't double-prefix if already absolute)
    const updatedProducts = products.map((product) => ({
      ...product._doc,
      product_images: (product.product_images || []).map((imgPath) =>
        // If imgPath already starts with http(s), leave it as-is; otherwise prefix with baseUrl.
        /^https?:\/\//i.test(imgPath) ? imgPath : `${baseUrl}${imgPath}`
      ),
    }));

    res.status(200).json({
      success: true,
      data: updatedProducts,
    });
  } catch (err) {
    next(err);
  }
};
