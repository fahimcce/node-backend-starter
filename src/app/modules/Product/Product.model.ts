import { model, Schema } from "mongoose";
import { TProduct } from "./Product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    size: { type: [String], required: true },
    stock: { type: Number, required: true },
    details: { type: String, required: true },
    category: { type: String, required: true },
    photo: { type: [String], required: true },
  },
  { timestamps: true }
);

export const Product = model<TProduct>("Product", productSchema);
