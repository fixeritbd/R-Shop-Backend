import express from "express";

import {
  handleGetProduct,
  handleGetProducts,
  handlePostProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", handleGetProducts);
router.post("/", handlePostProduct);
router.get("/:slug", handleGetProduct);

export default router;
