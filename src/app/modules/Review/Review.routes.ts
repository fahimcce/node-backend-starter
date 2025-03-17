import express from "express";
import { ReviewControllers } from "./Review.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/User.constant";
const router = express.Router();

router.post("/create", ReviewControllers.createReview);
router.get("/", ReviewControllers.getReviews);
router.get("/:id", auth(USER_ROLE.ADMIN), ReviewControllers.getReviewById);
router.patch("/:id", auth(USER_ROLE.ADMIN), ReviewControllers.updateReview);
router.delete("/:id", ReviewControllers.deleteReview);

export const reviewRoutes = router;
