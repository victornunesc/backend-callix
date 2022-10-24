import app from "./app";
import { createClient } from "redis";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`App is running on port ${PORT}!`);
});

const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true,
    rejectUnauthorized: false,
  },
});

redisClient.on("error", (error) => console.error(`Error : ${error}`));

redisClient.connect();

export default redisClient;
