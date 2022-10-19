import axios from "axios";

export const spaceX = axios.create({
  baseURL: "https://api.spacexdata.com",
});
