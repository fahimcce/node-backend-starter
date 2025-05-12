import { TDeath } from "./Death.interface";
import { DeathModel } from "./Death.model";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const createDeath = async (payload: TDeath) => {
  const existing = await DeathModel.findOne({ deathRegNo: payload.deathRegNo });
  if (existing) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Death registration number already exists."
    );
  }
  const result = await DeathModel.create(payload);
  return result;
};

const getAllDeaths = async () => {
  return await DeathModel.find();
};

const getSingleDeath = async (id: string) => {
  const result = await DeathModel.findById(id);
  if (!result)
    throw new ApiError(httpStatus.NOT_FOUND, "Death record not found.");
  return result;
};

const updateDeath = async (id: string, payload: Partial<TDeath>) => {
  const result = await DeathModel.findByIdAndUpdate(id, payload, { new: true });
  if (!result)
    throw new ApiError(httpStatus.NOT_FOUND, "Death record not found.");
  return result;
};

const deleteDeath = async (id: string) => {
  const result = await DeathModel.findByIdAndDelete(id);
  if (!result)
    throw new ApiError(httpStatus.NOT_FOUND, "Death record not found.");
  return result;
};

export const DeathService = {
  createDeath,
  getAllDeaths,
  getSingleDeath,
  updateDeath,
  deleteDeath,
};
