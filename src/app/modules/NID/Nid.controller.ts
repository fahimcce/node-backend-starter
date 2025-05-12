import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { NidServices } from "./Nid.service";

// CREATE
const createNid = catchAsync(async (req, res) => {
  const result = await NidServices.createNid(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "NID created successfully",
    data: result,
  });
});

// GET ALL
const getAllNids = catchAsync(async (_req, res) => {
  const result = await NidServices.getAllNids();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All NIDs fetched successfully",
    data: result,
  });
});

// GET SINGLE
const getSingleNid = catchAsync(async (req, res) => {
  const result = await NidServices.getSingleNid(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "NID fetched successfully",
    data: result,
  });
});

// UPDATE
const updateNid = catchAsync(async (req, res) => {
  const result = await NidServices.updateNid(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "NID updated successfully",
    data: result,
  });
});

// DELETE
const deleteNid = catchAsync(async (req, res) => {
  const result = await NidServices.deleteNid(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "NID deleted successfully",
    data: result,
  });
});

export const NidControllers = {
  createNid,
  getAllNids,
  getSingleNid,
  updateNid,
  deleteNid,
};
