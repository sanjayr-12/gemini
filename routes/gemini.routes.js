import express from "express";
import { getContent, self } from "../controller/gemini.controller.js";

const router = express.Router();

router.post("/prompt", getContent);
router.get("/self", self);

export default router;
