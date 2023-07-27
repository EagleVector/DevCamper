const express = require('express');
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middlewares/auth')

router
  .post('/register', register)
  .post('/login', login)
  .get('/me', protect, getMe)
  .post('/forgotPassword', forgotPassword)
  .put('/resetpassword/:resettoken', resetPassword);

module.exports = router;