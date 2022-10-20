import { Request, Response } from "express";
import { SpaceXLaunchesService } from "../../services/";

class SpaceXLaunchesController {
  getNextLaunch = async (_: Request, res: Response) => {
    try {
      const spaceXService = new SpaceXLaunchesService();
      const data = await spaceXService.getNextLaunch();

      return res.status(200).json(data);
    } catch (err) {
      return res.status(err.response.status).json({ error: err.message });
    }
  };

  getLatestLaunch = async (_: Request, res: Response) => {
    try {
      const spaceXService = new SpaceXLaunchesService();
      const data = await spaceXService.getLatestLaunch();

      return res.status(200).json(data);
    } catch (err) {
      return res.status(err.response.status).json({ error: err.message });
    }
  };

  getUpcomingLaunches = async (_: Request, res: Response) => {
    try {
      const spaceXService = new SpaceXLaunchesService();
      const data = await spaceXService.getUpcomingLaunches();

      return res.status(200).json(data);
    } catch (err) {
      return res.status(err.response.status).json({ error: err.message });
    }
  };

  getPastLaunches = async (_: Request, res: Response) => {
    try {
      const spaceXService = new SpaceXLaunchesService();
      const data = await spaceXService.getPastLaunches();

      return res.status(200).json(data);
    } catch (err) {
      return res.status(err.response.status).json({ error: err.message });
    }
  };
}

export default new SpaceXLaunchesController();
