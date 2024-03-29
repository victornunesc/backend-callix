import app from "./app";
import { createClient } from "redis";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`App is running on port ${PORT}!`);
});

const redisClient = createClient({
  password: process.env.REDISCLOUD_PASSWORD,
  socket: {
      host: process.env.REDISCLOUD_HOST,
      port: Number(process.env.REDISCLOUD_PORT)
  }
});

redisClient.on("error", (error) => console.error(`Error : ${error}`));

redisClient.connect();

export default redisClient;
