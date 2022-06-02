import { query } from "express";
import Product from "../models/productModel.js";

export const handleGetProduct = async (req, res) => {
  const { slug } = req.params;

  try {
    const product = await Product.findOne({ slug });
    if (product === null) {
      res.status(404).json({ message: "Product Not Found!" });
      return;
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
export const handleGetProducts = async (req, res) => {
  const { id } = req.query;

  if (id) {
    try {
      const product = await Product.findOne({ _id: id });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "Product Not Found!" });
    }
    return;
  }

  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};
export const handlePostProduct = async (req, res) => {
  const { brand, category, description, discountedPrice, imageUrls, inStock, price, review, slug, title } =
    req.body;
  const productData = {
    brand,
    category,
    description,
    discountedPrice,
    imageUrls,
    inStock,
    price,
    review,
    slug,
    title,
  };

  try {
    const product = new Product(productData);
    const response = await product.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
