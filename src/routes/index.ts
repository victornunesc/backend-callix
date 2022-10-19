import { Express, Request, Response } from "express";
import spaceXLaunchesRouter from "./spaceX/spaceXLaunches.routes";

const registerRoutes = (app: Express) => {
  app.use("/spacex/launches", spaceXLaunchesRouter);

  // all invalid routes fall into this
  app.all("*", (_: Request, res: Response) =>
    res.status(404).json({
      error: "Not Found.",
    })
  );
};

export default registerRoutes;
