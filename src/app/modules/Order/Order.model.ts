import { model, Schema } from "mongoose";
import { TOrder } from "./Order.interface";

const orderModelSchema = new Schema<TOrder>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "cancel", "approved", "delivered"],
      default: "pending",
    },
    products: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
          },
          quantity: { type: Number, required: true },
          name: { type: String },
          photo: { type: String },
          size: { type: String },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const Order = model<TOrder>("Order", orderModelSchema);
