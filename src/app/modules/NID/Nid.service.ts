import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { TNid } from "./Nid.interface";
import { Nid } from "./Nid.model";

// CREATE
const createNid = async (payload: TNid) => {
  const isExist = await Nid.findOne({ nidNumber: payload.nidNumber });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, "NID already exists");
  }
  return await Nid.create(payload);
};

// GET ALL
const getAllNids = async () => {
  return await Nid.find();
};

// GET ONE
const getSingleNid = async (id: string) => {
  const result = await Nid.findById(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "NID not found");
  }
  return result;
};

// UPDATE
const updateNid = async (id: string, payload: Partial<TNid>) => {
  const result = await Nid.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "NID not found");
  }
  return result;
};

// DELETE
const deleteNid = async (id: string) => {
  const result = await Nid.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "NID not found");
  }
  return result;
};

export const NidServices = {
  createNid,
  getAllNids,
  getSingleNid,
  updateNid,
  deleteNid,
};
