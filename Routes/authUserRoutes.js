import express from 'express';
import { protect } from '../middleware/protect.js';
import { isAdmin } from '../middleware/admin.js';
import { authSignUp, authLogin } from '../Controller/authUserController.js';

const authUserRoutes = express.Router();

// signup & login
authUserRoutes.post('/signup', authSignUp);
authUserRoutes.post('/login', authLogin);

// user profile (logged-in users)
authUserRoutes.get('/profile', protect, (req, res) => {
  res.json({
    message: 'This is a protected user route',
    user: req.user,
  });
});

// admin route
authUserRoutes.get('/admin', protect, isAdmin, (req, res) => {
  res.json({
    message: 'This is a protected admin route',
    user: req.user,
  });
});

export default authUserRoutes;
