import express from "express";
import { UserControllers } from "./User.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "./User.constant";
const router = express.Router();

router.get("/", auth(USER_ROLE.ADMIN), UserControllers.getAllUsers);
router.patch("/:id", auth(USER_ROLE.ADMIN), UserControllers.updateUser);

export const userRoutes = router;
