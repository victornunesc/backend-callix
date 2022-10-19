import { Router } from "express";
import spaceXLaunchesControllers from "../../controllers/spaceX/spaceXLaunches.controllers";

const spaceXLaunchesRouter = Router();

spaceXLaunchesRouter.get("/next", spaceXLaunchesControllers.getNextLaunch);

export default spaceXLaunchesRouter;
