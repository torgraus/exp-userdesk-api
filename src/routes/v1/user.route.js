import express from "express";
import protect from "../../middlewares/auth.middleware.js";
import { getMe } from "../../controllers/v1/user.controller.js";

const router = express.Router();

// Routes
router.route("/me").get(protect, getMe);

export default router;
