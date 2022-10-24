import { Router } from "express";
import { SpaceXLaunchesController } from "../../controllers/";
import { cacheData } from "../../middlewares";

const spaceXLaunchesRouter = Router();

spaceXLaunchesRouter.get(
  "/next",
  cacheData,
  SpaceXLaunchesController.getNextLaunch
);
spaceXLaunchesRouter.get(
  "/latest",
  cacheData,
  SpaceXLaunchesController.getLatestLaunch
);
spaceXLaunchesRouter.get(
  "/upcoming",
  cacheData,
  SpaceXLaunchesController.getUpcomingLaunches
);
spaceXLaunchesRouter.get(
  "/past",
  cacheData,
  SpaceXLaunchesController.getPastLaunches
);

export default spaceXLaunchesRouter;
