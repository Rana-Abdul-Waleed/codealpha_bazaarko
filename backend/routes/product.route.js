import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  addProduct,
  getAllProducts,
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

export default router;
