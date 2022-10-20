import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import { errorHandler } from "./errors";
import registerRoutes from "./routes";
import cors from "cors";

config();

const app = express();
app.use(express.json());
app.use(cors());
registerRoutes(app);

app.use((err: Error, _: Request, response: Response, __: NextFunction) => {
  return errorHandler(err, response);
});

export default app;
