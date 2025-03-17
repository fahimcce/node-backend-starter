import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ReviewServices } from "./Review.service";
import httpStatus from "http-status";

const createReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReview(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review created successfully!",
    data: result,
  });
});

const getReviews = catchAsync(async (req, res) => {
  const result = await ReviewServices.getReviews();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reviews fetched successfully!",
    data: result,
  });
});

const getReviewById = catchAsync(async (req, res) => {
  const result = await ReviewServices.getReviewById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review fetched successfully!",
    data: result,
  });
});

const updateReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.updateReview(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review updated successfully!",
    data: result,
  });
});

const deleteReview = catchAsync(async (req, res) => {
  await ReviewServices.deleteReview(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review deleted successfully!",
    data: null,
  });
});

export const ReviewControllers = {
  createReview,
  getReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
