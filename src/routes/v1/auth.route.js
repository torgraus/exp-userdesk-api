import express from 'express';
import { createUser, loginUser } from '../../controllers/v1/user.controller.js';

const router = express.Router();

// Routes
router.route('/register').post(createUser);
router.route('/login').post(loginUser);

export default router;
