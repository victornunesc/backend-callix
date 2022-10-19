import { spaceX } from "../api";

class SpaceXLaunchesService {
  getNextLaunch = async () => {
    const { data } = await spaceX.get("/v5/launches/next");

    return data;
  };

  getLatestLaunch = async () => {
    const { data } = await spaceX.get("/v5/launches/latest");

    return data;
  };

  getUpcomingLaunches = async () => {
    const { data } = await spaceX.get("/v5/launches/upcoming");

    return data;
  };
}

export default SpaceXLaunchesService;
