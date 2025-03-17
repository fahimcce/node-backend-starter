import express from "express";
import { ContactControllers } from "./Contact.controller";
const router = express.Router();

router.post("/create-contact", ContactControllers.createContact);
router.get("/", ContactControllers.getContacts);

export const contactRoutes = router;
