import express from "express";
import { authRoutes } from "../modules/Auth/Auth.routes";
import { userRoutes } from "../modules/User/User.routes";

const router = express.Router();

const moudleRoute = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
];

moudleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
