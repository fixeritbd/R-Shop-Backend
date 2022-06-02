import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import productRouter from "./routes/productRouter.js";
import {
  bannerData,
  cartItems,
  delData,
  featureBannerData,
  logoData,
  productData,
  recentViewedData,
} from "./data/index.js";
import compare from "./data/compare.js";
import gotoTralliData from "./data/gotoTralliData.js";

dotenv.config();

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ddej9.mongodb.net/rshop?retryWrites=true&w=majority`;


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/products", productRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/featurebanner", function (req, res) {
  res.send(featureBannerData);
});


app.get("/deal", function (req, res) {
  res.send(delData);
});

app.get("/banner", function (req, res) {
  res.send(bannerData);
});
app.get("/logo", function (req, res) {
  res.send(logoData);
});

app.get("/cartitem", function (req, res) {
  res.send(cartItemData);
});
app.get("/compare", function (req, res) {
  res.send(compare);
});
app.get("/gototralli", function (req, res) {
  res.send(gotoTralliData);
});

app.get("/recentviewed", function (req, res) {
  res.send(recentViewed);
});

app.listen(8000, () => {
  console.log("server running on port 8000");

  mongoose.connect(DB_URL, () => {
    console.log("DB Connected!");
  });
});
