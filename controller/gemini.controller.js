import { genContent } from "../gemini/gemini.js";

export const getContent = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await genContent(prompt);
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Interal server error " + error.message });
  }
};

export const self = async (req, res) => {
  return res.status(200).json({ message: "server restarted" });
};
