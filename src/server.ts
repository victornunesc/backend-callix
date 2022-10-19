import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`App is running on port ${PORT}!`);
});
