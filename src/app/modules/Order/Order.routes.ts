// Route
import express from "express";
import { OrderControllers } from "./Order.Controller";

const router = express.Router();

router.post("/create", OrderControllers.createOrder);
router.get("/", OrderControllers.getOrders);
router.get("/:id", OrderControllers.getOrderById);
router.patch("/:id", OrderControllers.updateOrder);
router.delete("/:id", OrderControllers.deleteOrder);

export const orderRoutes = router;
