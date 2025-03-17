import { Schema } from "mongoose";

export type TOrder = {
  name: string;
  phone: string;
  address: string;
  totalPrice?: number;
  status?: "pending" | "cancel" | "approved" | "delivered";
  products: {
    productId: Schema.Types.ObjectId;
    quantity: number;
    name: string;
    photo: string;
    size: string;
  }[];
};
