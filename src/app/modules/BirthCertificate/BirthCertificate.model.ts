import { Schema, model } from "mongoose";
import { TBirthCertificate } from "./BirthCertificate.interface";

const birthCertificateSchema = new Schema<TBirthCertificate>(
  {
    birthRegNo: { type: String, required: true, unique: true },
    dateOfBirth: { type: String, required: true },
    dateOfRegistration: { type: String, required: true },
    dateOfIssuance: { type: String, required: true },
    qrCode: { type: String },
    nameEn: { type: String, required: true },
    nameBn: { type: String, required: true },
    sex: { type: String, enum: ["Male", "Female", "Other"], required: true },
    fatherNameEn: { type: String, required: true },
    fatherNameBn: { type: String, required: true },
    motherNameEn: { type: String, required: true },
    motherNameBn: { type: String, required: true },
    address1: { type: String },
    address2: { type: String },
    placeOfBirthEn: { type: String, required: true },
    permanentAddressEn: { type: String },
    fatherNationalityEn: { type: String },
    motherNationalityEn: { type: String },
  },
  { timestamps: true }
);

export const BirthCertificate = model<TBirthCertificate>(
  "BirthCertificate",
  birthCertificateSchema
);
