import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { addProduct } from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Add Product Route
router.post(
  "/addProduct",
  verifyToken,
  upload.array("product_images", 4), // 'product_images' matches FormData key in frontend
  addProduct
);

export default router;
