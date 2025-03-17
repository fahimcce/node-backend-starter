import { model, Schema } from "mongoose";
import { TContact } from "./Contact.interface";

const contactModelSchema = new Schema<TContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Contact = model<TContact>("Contact", contactModelSchema);
