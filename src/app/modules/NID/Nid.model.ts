import { model, Schema } from "mongoose";
import { TNid } from "./Nid.interface";

const nidSchema = new Schema<TNid>(
  {
    nameBn: { type: String, required: true },
    nameEn: { type: String, required: true },
    nidNumber: { type: String, required: true, unique: true },
    pinNumber: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    dob: { type: String, required: true },
    bloodGroup: { type: String },
    photo: { type: String },
    signature: { type: String },
    issueDate: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

export const Nid = model<TNid>("Nid", nidSchema);
