import express from "express";
import protect from "../../middlewares/auth.middleware.js";
import { getMe, updateUser } from "../../controllers/v1/user.controller.js";

const router = express.Router();

// Routes
router.route("/me").get(protect, getMe);
router.route("/:id").patch(protect, updateUser);

export default router;
