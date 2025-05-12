import httpStatus from "http-status";
import ApiError from "../../errors/ApiError";
import { TBirthCertificate } from "./BirthCertificate.interface";
import { BirthCertificate } from "./BirthCertificate.model";

const create = async (payload: TBirthCertificate) => {
  const isExist = await BirthCertificate.findOne({
    birthRegNo: payload.birthRegNo,
  });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, "Certificate already exists.");
  }
  return await BirthCertificate.create(payload);
};

const getAll = async () => {
  return await BirthCertificate.find();
};

const getById = async (id: string) => {
  const cert = await BirthCertificate.findById(id);
  if (!cert) throw new ApiError(httpStatus.NOT_FOUND, "Certificate not found");
  return cert;
};

const update = async (id: string, data: Partial<TBirthCertificate>) => {
  const updated = await BirthCertificate.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updated) throw new ApiError(httpStatus.NOT_FOUND, "Update failed");
  return updated;
};

const deleteCertificate = async (id: string) => {
  const deleted = await BirthCertificate.findByIdAndDelete(id);
  if (!deleted) throw new ApiError(httpStatus.NOT_FOUND, "Delete failed");
  return deleted;
};

export const BirthCertificateServices = {
  create,
  getAll,
  getById,
  update,
  delete: deleteCertificate,
};
