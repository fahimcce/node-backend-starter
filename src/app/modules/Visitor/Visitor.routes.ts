import express from "express";
import { VisitorController } from "./Visitor.controller";

const router = express.Router();

router.get("/", VisitorController.getUniqueVisitorCount);

export const visitorRoutes = router;
