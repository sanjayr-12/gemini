import axios from "axios";
import cron from "node-cron";
import { configDotenv } from "dotenv";
configDotenv();

export const Restart = () => {
  cron.schedule(
    "*/14 * * * *",
    async () => {
      const response = await axios.get(process.env.SERVER_URL);
      console.log(response.data.message);
    },
    {
      timezone: "Asia/Kolkata",
    }
  );
};
