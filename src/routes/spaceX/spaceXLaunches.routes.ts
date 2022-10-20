import { Router } from "express";
import spaceXLaunchesControllers from "../../controllers/spaceX/spaceXLaunches.controllers";

const spaceXLaunchesRouter = Router();

spaceXLaunchesRouter.get("/next", spaceXLaunchesControllers.getNextLaunch);
spaceXLaunchesRouter.get("/latest", spaceXLaunchesControllers.getLatestLaunch);
spaceXLaunchesRouter.get(
  "/upcoming",
  spaceXLaunchesControllers.getUpcomingLaunches
);
spaceXLaunchesRouter.get("/past", spaceXLaunchesControllers.getPastLaunches);

export default spaceXLaunchesRouter;
