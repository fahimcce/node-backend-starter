import { Schema, model } from "mongoose";
import { TDeath } from "./Death.interface";

const deathSchema = new Schema<TDeath>(
  {
    birthRegNo: { type: String },
    birthDate: { type: String },

    address1: { type: String, required: true },
    address2: { type: String, required: true },
    dateOfRegistration: { type: String, required: true },
    dateOfIssuance: { type: String, required: true },
    deathRegNo: { type: String, required: true, unique: true },
    dateOfBirth: { type: String, required: true },
    qrCode: { type: String, required: true },
    dateOfDeath: { type: String, required: true },
    sex: { type: String, enum: ["Male", "Female", "Other"], required: true },

    nameBn: { type: String, required: true },
    nameEn: { type: String, required: true },
    fatherNameBn: { type: String, required: true },
    fatherNameEn: { type: String, required: true },
    motherNameBn: { type: String, required: true },
    motherNameEn: { type: String, required: true },

    placeOfDeath: { type: String, required: true },
    causeOfDeath: { type: String, required: true },

    fatherNationalityBn: { type: String, required: true },
    fatherNationalityEn: { type: String, required: true },
    motherNationalityBn: { type: String, required: true },
    motherNationalityEn: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const DeathModel = model<TDeath>("Death", deathSchema);
