import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { BirthCertificateServices } from "./BirthCertificate.service";

const createCertificate = catchAsync(async (req, res) => {
  const result = await BirthCertificateServices.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Birth Certificate Created Successfully",
    data: result,
  });
});

const getAllCertificates = catchAsync(async (_req, res) => {
  const result = await BirthCertificateServices.getAll();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Birth Certificates fetched",
    data: result,
  });
});

const getSingleCertificate = catchAsync(async (req, res) => {
  const result = await BirthCertificateServices.getById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Birth Certificate fetched",
    data: result,
  });
});

const updateCertificate = catchAsync(async (req, res) => {
  const result = await BirthCertificateServices.update(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Birth Certificate updated",
    data: result,
  });
});

const deleteCertificate = catchAsync(async (req, res) => {
  const result = await BirthCertificateServices.delete(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Birth Certificate deleted",
    data: result,
  });
});

export const BirthCertificateController = {
  createCertificate,
  getAllCertificates,
  getSingleCertificate,
  updateCertificate,
  deleteCertificate,
};
