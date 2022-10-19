import { spaceX } from "../api";

class SpaceXLaunchesService {
  getNextLaunch = async () => {
    const { data } = await spaceX.get("/v5/launches/next");

    return data;
  };
}

export default SpaceXLaunchesService;
