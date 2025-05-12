import express from "express";
import { NidControllers } from "./Nid.controller";

const router = express.Router();

router.post("/", NidControllers.createNid);
router.get("/", NidControllers.getAllNids);
router.get("/:id", NidControllers.getSingleNid);
router.patch("/:id", NidControllers.updateNid);
router.delete("/:id", NidControllers.deleteNid);

export const nidRoutes = router;
