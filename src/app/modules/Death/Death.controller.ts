import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { DeathService } from "./Death.service";
import httpStatus from "http-status";

const createDeath = catchAsync(async (req, res) => {
  const result = await DeathService.createDeath(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Death record created",
    data: result,
  });
});

const getAllDeaths = catchAsync(async (_req, res) => {
  const result = await DeathService.getAllDeaths();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All death records fetched",
    data: result,
  });
});

const getSingleDeath = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DeathService.getSingleDeath(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Death record fetched",
    data: result,
  });
});

const updateDeath = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DeathService.updateDeath(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Death record updated",
    data: result,
  });
});

const deleteDeath = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DeathService.deleteDeath(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Death record deleted",
    data: result,
  });
});

export const DeathController = {
  createDeath,
  getAllDeaths,
  getSingleDeath,
  updateDeath,
  deleteDeath,
};
