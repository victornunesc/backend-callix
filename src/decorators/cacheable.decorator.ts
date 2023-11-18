import { Request } from "express";
import redisClient from "../server";

export const cacheable =
  (EX = 180) =>
  (_: Object, __: string, descriptor: PropertyDescriptor): object => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (req: Request) {
      const result = await originalMethod(req);

      if (redisClient.isReady) {      
        await redisClient.set(req.url, JSON.stringify(result), {
          EX: EX,
          NX: true,
        });
      }

      return result;
    };

    return descriptor;
  };
