import express from "express";
import { SorokkaController } from "./Sookka.controller";

const router = express.Router();

router.post("/", SorokkaController.createSorokka);
router.get("/", SorokkaController.getAllSorokka);
router.get("/:id", SorokkaController.getSingleSorokka);
router.patch("/:id", SorokkaController.updateSorokka);
router.delete("/:id", SorokkaController.deleteSorokka);

export const SorokkaRoutes = router;
