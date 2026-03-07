import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  addProduct,
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post(
  "/addProduct",
  verifyToken,
  upload.array("product_images", 4),
  addProduct
);

router.get("/getAllProducts", verifyToken, getAllProducts);
router.get("/getProductById/:productId", verifyToken, getProductById);

export default router;
