import { Schema, model } from "mongoose";
import { TAutoNid } from "./AutoNid.interface";

const autoNidSchema = new Schema<TAutoNid>(
  {
    nameBn: { type: String, required: true },
    nameEn: { type: String, required: true },
    nidNumber: { type: String, required: true, unique: true },
    pinNumber: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    birthPlace: { type: String, required: true },
    dob: { type: String, required: true },
    issueDate: { type: String, required: true },
    bloodGroup: { type: String },
    address: { type: String, required: true },
    photoUrl: { type: String },
    signatureUrl: { type: String },
  },
  { timestamps: true }
);

export const AutoNid = model<TAutoNid>("AutoNid", autoNidSchema);
