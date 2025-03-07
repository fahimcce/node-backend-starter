import express from "express";
import validateRequest from "../../middlewares/validRequest";
import { LoginValidator, UserValidator } from "./Auth.validation";
import { AuthControllers } from "./Auth.controller";

const router = express.Router();

router.post("/signup", validateRequest(UserValidator), AuthControllers.SignUp);

router.post("/login", validateRequest(LoginValidator), AuthControllers.login);

// router.get("/users", authController.getOneUser);

// router.post(
//   "/login",
//   validateRequest(authValidation.loginValidationSchema),
//   authController.login
// );

// router.put(
//   "/status/:id",
//   authGuared(USER_ROLE.admin),
//   authController.makeAdmin
// );

export const authRoutes = router;
