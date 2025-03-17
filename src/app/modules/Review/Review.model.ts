import { model, Schema } from "mongoose";
import { TReview } from "./Review.interface";

const reviewModelSchema = new Schema<TReview>(
  {
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const Review = model<TReview>("Review", reviewModelSchema);
