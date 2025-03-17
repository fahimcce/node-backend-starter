import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ContactServices } from "./Contact.service";
import httpStatus from "http-status";

const createContact = catchAsync(async (req, res) => {
  const result = await ContactServices.createContact(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact message submitted successfully!",
    data: result,
  });
});

const getContacts = catchAsync(async (req, res) => {
  const result = await ContactServices.getContacts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contacts fetched successfully!",
    data: result,
  });
});

export const ContactControllers = {
  createContact,
  getContacts,
};
