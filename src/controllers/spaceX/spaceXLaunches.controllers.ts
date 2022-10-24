import { Request, Response } from "express";
import { SpaceXLaunchesService } from "../../services/";

interface ISpaceXLaunchesController {
  getNextLaunch: (req: Request, res: Response) => Promise<void>;
  getLatestLaunch: (req: Request, res: Response) => Promise<void>;
  getUpcomingLaunches: (req: Request, res: Response) => Promise<void>;
  getPastLaunches: (req: Request, res: Response) => Promise<void>;
}

class SpaceXLaunchesController implements ISpaceXLaunchesController {
  getNextLaunch = async (req: Request, res: Response): Promise<void> => {
    const spaceXService = new SpaceXLaunchesService();

    try {
      const data = await spaceXService.getNextLaunch(req);

      res.status(200).json(data);
    } catch (err: any) {
      res.status(err.response.status).json({ error: err.message });
    }
  };

  getLatestLaunch = async (req: Request, res: Response): Promise<void> => {
    const spaceXService = new SpaceXLaunchesService();

    try {
      const data = await spaceXService.getLatestLaunch(req);

      res.status(200).json(data);
    } catch (err: any) {
      res.status(err.response.status).json({ error: err.message });
    }
  };

  getUpcomingLaunches = async (req: Request, res: Response): Promise<void> => {
    const spaceXService = new SpaceXLaunchesService();

    try {
      const data = await spaceXService.getUpcomingLaunches(req);

      res.status(200).json(data);
    } catch (err: any) {
      res.status(err.response.status).json({ error: err.message });
    }
  };

  getPastLaunches = async (req: Request, res: Response): Promise<void> => {
    const spaceXService = new SpaceXLaunchesService();

    try {
      const data = await spaceXService.getPastLaunches(req);

      res.status(200).json(data);
    } catch (err: any) {
      res.status(err.response.status).json({ error: err.message });
    }
  };
}

export default new SpaceXLaunchesController();
