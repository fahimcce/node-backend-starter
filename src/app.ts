import express, { Application, Request, Response } from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app: Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.uqeshop.com",
      "https://uqe.vercel.app",
    ],
    credentials: true,
  })
);

// application route
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Entry to uqe secure server",
  });
});

// global error
app.use(globalErrorHandler);
app.use(notFound);

export default app;
