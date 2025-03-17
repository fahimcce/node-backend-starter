import { TContact } from "./Contact.interface";
import { Contact } from "./Contact.model";

const createContact = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

const getContacts = async () => {
  const result = await Contact.find({});
  return result;
};

export const ContactServices = {
  createContact,
  getContacts,
};
