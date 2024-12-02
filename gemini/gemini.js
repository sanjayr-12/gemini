import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";
configDotenv();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-001",
});

export const genContent = async (prompt) => {
  try {
    const result = await model.generateContent(process.env.UTIL_TEXT + " "+ prompt);
    return result.response.text();
  } catch (error) {
    throw error;
  }
};
