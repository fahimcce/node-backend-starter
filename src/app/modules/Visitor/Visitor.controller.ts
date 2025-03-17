import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { VisitorService } from "./Visitor.service";

const getUniqueVisitorCount = catchAsync(async (req, res) => {
  const { uniqueCount, visitorData } =
    await VisitorService.getUniqueVisitorCount(req);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Visitor info retrieved",
    data: { uniqueCount, visitorData },
  });
});

export const VisitorController = {
  getUniqueVisitorCount,
};
