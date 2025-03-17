import express from "express";
import { authRoutes } from "../modules/Auth/Auth.routes";
import { userRoutes } from "../modules/User/User.routes";
import { categoryRoutes } from "../modules/Category/Category.routes";
import { productRoutes } from "../modules/Product/Product.routes";
import { orderRoutes } from "../modules/Order/Order.routes";
import { visitorRoutes } from "../modules/Visitor/Visitor.routes";

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
  {
    path: "/category",
    route: categoryRoutes,
  },
  {
    path: "/product",
    route: productRoutes,
  },
  {
    path: "/order",
    route: orderRoutes,
  },
  {
    path: "/visitor",
    route: visitorRoutes,
  },
];

moudleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
