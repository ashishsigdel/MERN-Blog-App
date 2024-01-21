import express from "express";
import { google, signup, singIn } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", singIn);
router.post("/google", google);

export default router;
