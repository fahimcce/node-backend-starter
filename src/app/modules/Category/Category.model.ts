import { model, Schema } from "mongoose";
import { TCategory } from "./Category.interface";

const categorySchema = new Schema<TCategory>(
  {
    name: { type: String, required: true },
    photo: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category = model<TCategory>("Category", categorySchema);
