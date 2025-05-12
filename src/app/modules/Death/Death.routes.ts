import express from "express";
import { DeathController } from "./Death.controller";

const router = express.Router();

router.post("/", DeathController.createDeath);
router.get("/", DeathController.getAllDeaths);
router.get("/:id", DeathController.getSingleDeath);
router.patch("/:id", DeathController.updateDeath);
router.delete("/:id", DeathController.deleteDeath);

export const DeathRoutes = router;
