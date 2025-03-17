import express from "express";
import { CategoryController } from "./Category.controller";

const router = express.Router();

router.post("/", CategoryController.createCategory);
router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategoryById);
router.patch("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

export const categoryRoutes = router;
