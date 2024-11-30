import express from "express";
import { configDotenv } from "dotenv";
import geminiRoutes from "./routes/gemini.routes.js";
import { Restart } from "./cron/selfCron.js";
const app = express();
configDotenv();

app.use(express.json());

app.use("/api", geminiRoutes);

app.listen(process.env.PORT, () => {
  console.log("server started");
  Restart();
});
