import { getLaunchShape, getLaunchesShape } from "../../schemas";
import { retryPolicy } from "../../decorators";
import { spaceX } from "../api";
import { InferType } from "yup";
import { Request } from "express";
import { cacheable } from "../../decorators/";

type TLaunch = InferType<typeof getLaunchShape>;
type TLaunches = InferType<typeof getLaunchesShape>;

interface ISpaceXLaunchesService {
  getNextLaunch: (req: Request) => Promise<TLaunch>;
  getLatestLaunch: (req: Request) => Promise<TLaunch>;
  getUpcomingLaunches: (req: Request) => Promise<TLaunches>;
  getPastLaunches: (req: Request) => Promise<TLaunches>;
}

class SpaceXLaunchesService implements ISpaceXLaunchesService {
  @retryPolicy(3, 2)
  @cacheable()
  public async getNextLaunch(req: Request): Promise<TLaunch> {
    const { data } = await spaceX.get("/v5/launches/next");

    return await getLaunchShape.validate(data, {
      stripUnknown: true,
    });
  }

  @retryPolicy()
  @cacheable()
  public async getLatestLaunch(req: Request): Promise<TLaunch> {
    const { data } = await spaceX.get("/v5/launches/latest");

    return await getLaunchShape.validate(data, { stripUnknown: true });
  }

  @retryPolicy()
  @cacheable(300)
  public async getUpcomingLaunches(req: Request): Promise<TLaunches> {
    const { data } = await spaceX.get("/v5/launches/upcoming");

    return await getLaunchesShape.validate(data, { stripUnknown: true });
  }

  @retryPolicy()
  @cacheable(300)
  public async getPastLaunches(req: Request): Promise<TLaunches> {
    const { data } = await spaceX.get("/v5/launches/past");

    return await getLaunchesShape.validate(data, { stripUnknown: true });
  }
}

export default SpaceXLaunchesService;
