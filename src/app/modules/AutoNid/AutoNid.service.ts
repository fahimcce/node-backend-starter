import { TAutoNid } from "./AutoNid.interface";
import { AutoNid } from "./AutoNid.model";
import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";

const createAutoNid = async (payload: TAutoNid) => {
  const existing = await AutoNid.findOne({ nidNumber: payload.nidNumber });
  if (existing) {
    throw new ApiError(httpStatus.CONFLICT, "NID already exists");
  }
  const result = await AutoNid.create(payload);
  return result;
};

const getSingleAutoNid = async (id: string) => {
  const result = await AutoNid.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "NID not found");
  }
  return result;
};

const getAllAutoNids = async () => {
  const result = await AutoNid.find();
  return result;
};

const updateAutoNid = async (id: string, payload: Partial<TAutoNid>) => {
  const result = await AutoNid.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "NID not found");
  }
  return result;
};

const deleteAutoNid = async (id: string) => {
  const result = await AutoNid.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "NID not found");
  }
  return result;
};

export const AutoNidServices = {
  createAutoNid,
  getSingleAutoNid,
  getAllAutoNids,
  updateAutoNid,
  deleteAutoNid,
};
