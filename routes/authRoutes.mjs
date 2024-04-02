// authRoutes.mjs

import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.mjs';
import { signup, login, getUserDetails, logout, updateUsername } from '../controllers/authController.mjs';

const router = express.Router();
 
router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authenticateToken,getUserDetails);
router.put('/update-username', authenticateToken,updateUsername);
router.post('/logout', logout);

export default router;
