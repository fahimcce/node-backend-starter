import { TSorokka } from "./Sorokka.interface";
import { SorokkaModel } from "./Sorokka.model";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";

const createSorokka = async (payload: TSorokka) => {
  const existing = await SorokkaModel.findOne({
    certificateNo: payload.certificateNo,
  });
  if (existing) {
    throw new ApiError(httpStatus.CONFLICT, "Certificate already exists.");
  }
  const result = await SorokkaModel.create(payload);
  return result;
};

const getAllSorokka = async () => {
  return await SorokkaModel.find();
};

const getSingleSorokka = async (id: string) => {
  const result = await SorokkaModel.findById(id);
  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Sorokka not found.");
  return result;
};

const updateSorokka = async (id: string, payload: Partial<TSorokka>) => {
  const result = await SorokkaModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Sorokka not found.");
  return result;
};

const deleteSorokka = async (id: string) => {
  const result = await SorokkaModel.findByIdAndDelete(id);
  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "Sorokka not found.");
  return result;
};

export const SorokkaService = {
  createSorokka,
  getAllSorokka,
  getSingleSorokka,
  updateSorokka,
  deleteSorokka,
};
