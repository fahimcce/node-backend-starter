import express from "express";
import { AutoNidControllers } from "./AutoNid.controller";

const router = express.Router();

router.post("/", AutoNidControllers.create);
router.get("/", AutoNidControllers.getAll);
router.get("/:id", AutoNidControllers.getOne);
router.patch("/:id", AutoNidControllers.update);
router.delete("/:id", AutoNidControllers.remove);

export const autoNidRoutes = router;
