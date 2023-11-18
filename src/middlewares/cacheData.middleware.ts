import { NextFunction, Request, Response } from "express";
import redisClient from "../server";

export const cacheData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const url = req.url;

  try {
    if (!redisClient.isReady) {
      next()
    }
    
    const cacheResults = await redisClient.get(url);

    if (cacheResults) {
      let data = JSON.parse(cacheResults);

      res.status(200).json(data);
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(404);
  }
};
