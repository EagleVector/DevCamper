const express = require('express');
const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middlewares/auth')

router
  .post('/register', register)
  .post('/login', login)
  .get('/logout', logout)
  .get('/me', protect, getMe)
  .put('/updateDetails', protect, updateDetails)
  .put('/updatePassword', protect, updatePassword)
  .post('/forgotPassword', forgotPassword)
  .put('/resetpassword/:resettoken', resetPassword);

module.exports = router;