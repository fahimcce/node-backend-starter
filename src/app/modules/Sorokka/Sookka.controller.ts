import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SorokkaService } from "./Sorokka.service";
import httpStatus from "http-status";

const createSorokka = catchAsync(async (req, res) => {
  const result = await SorokkaService.createSorokka(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Sorokka record created",
    data: result,
  });
});

const getAllSorokka = catchAsync(async (_req, res) => {
  const result = await SorokkaService.getAllSorokka();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sorokka records retrieved",
    data: result,
  });
});

const getSingleSorokka = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SorokkaService.getSingleSorokka(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Sorokka record retrieved",
    data: result,
  });
});

const updateSorokka = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SorokkaService.updateSorokka(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sorokka record updated",
    data: result,
  });
});

const deleteSorokka = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SorokkaService.deleteSorokka(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sorokka record deleted",
    data: result,
  });
});

export const SorokkaController = {
  createSorokka,
  getAllSorokka,
  getSingleSorokka,
  updateSorokka,
  deleteSorokka,
};
