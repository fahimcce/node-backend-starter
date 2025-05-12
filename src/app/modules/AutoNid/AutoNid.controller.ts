import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AutoNidServices } from "./AutoNid.service";

const create = catchAsync(async (req, res) => {
  const result = await AutoNidServices.createAutoNid(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "AutoNID created successfully",
    data: result,
  });
});

const getOne = catchAsync(async (req, res) => {
  const result = await AutoNidServices.getSingleAutoNid(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "AutoNID fetched successfully",
    data: result,
  });
});

const getAll = catchAsync(async (_req, res) => {
  const result = await AutoNidServices.getAllAutoNids();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "AutoNIDs fetched successfully",
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await AutoNidServices.updateAutoNid(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "AutoNID updated successfully",
    data: result,
  });
});

const remove = catchAsync(async (req, res) => {
  const result = await AutoNidServices.deleteAutoNid(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "AutoNID deleted successfully",
    data: result,
  });
});

export const AutoNidControllers = {
  create,
  getOne,
  getAll,
  update,
  remove,
};
