import express from "express";
import { BirthCertificateController } from "./BirthCertificate.controller";

const router = express.Router();

router.post("/", BirthCertificateController.createCertificate);
router.get("/", BirthCertificateController.getAllCertificates);
router.get("/:id", BirthCertificateController.getSingleCertificate);
router.patch("/:id", BirthCertificateController.updateCertificate);
router.delete("/:id", BirthCertificateController.deleteCertificate);

export const BirthCertificateRoutes = router;
