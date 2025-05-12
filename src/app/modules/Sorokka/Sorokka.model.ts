import { Schema, model } from "mongoose";
import { TSorokka } from "./Sorokka.interface";

const doseSchema = new Schema(
  {
    date: String,
    name: String,
  },
  { _id: false }
);

const sorokkaSchema = new Schema<TSorokka>(
  {
    certificateNo: { type: String, required: true, unique: true },
    nidNo: { type: String },
    birthNo: { type: String },
    name: { type: String, required: true },
    nationalId: { type: String },
    passportNo: { type: String },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    nationality: { type: String },
    vaccinationBy: { type: String },
    doseDetails: { type: [doseSchema], default: [] },
    vaccinationCenter: { type: String },
    totalDoseGiven: { type: String },
  },
  { timestamps: true }
);

export const SorokkaModel = model<TSorokka>("Sorokka", sorokkaSchema);
