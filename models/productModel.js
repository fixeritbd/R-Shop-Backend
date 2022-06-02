import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
  description: {
    full: {
      type: String,
      required: true,
      default: "Product Long Description",
    },
    short: {
      type: String,
      required: true,
      default: "Product Short Description",
    },
  },
  discountedPrice: {
    type: Number,
  },
  imageUrls: {
    type: [String],
    required: false,
  },
  inStock: {
    type: Number,
    required: true,
    default: 0,
  },
  lastModified: {
    type: Date,
    required: false,
    default: new Date(),
  },
  price: {
    type: Number,
    required: true,
  },
  review: {
    description: {
      type: String,
      required: false,
    },

    rating: {
      type: Number,
      required: false,
    },

    reviewTime: {
      type: Date,
      required: false,
      default: new Date(),
    },
    userId: {
      type: String,
      required: false,
    },
  },

  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);
