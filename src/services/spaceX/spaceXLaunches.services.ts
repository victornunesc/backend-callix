import { getLaunch, getLaunches } from "../../schemas";
import { spaceX } from "../api";

class SpaceXLaunchesService {
  getNextLaunch = async () => {
    const { data } = await spaceX.get("/v5/launches/next");

    return await getLaunch.validate(data, { stripUnknown: true });
  };

  getLatestLaunch = async () => {
    const { data } = await spaceX.get("/v5/launches/latest");

    return await getLaunch.validate(data, { stripUnknown: true });
  };

  getUpcomingLaunches = async () => {
    const { data } = await spaceX.get("/v5/launches/upcoming");

    return await getLaunches.validate(data, { stripUnknown: true });
  };

  getPastLaunches = async () => {
    const { data } = await spaceX.get("/v5/launches/past");

    return await getLaunches.validate(data, { stripUnknown: true });
  };
}

export default SpaceXLaunchesService;
