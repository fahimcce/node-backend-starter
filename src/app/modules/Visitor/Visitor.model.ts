import { model, Schema } from "mongoose";

const visitorSchema = new Schema(
  {
    ip: { type: String, required: true, unique: true },
    browser: { type: String, required: true },
    os: { type: String, required: true },
    device: { type: String, required: true },
    userAgent: { type: String, required: true },
  },
  { timestamps: true }
);

export const Visitor = model("Visitor", visitorSchema);
