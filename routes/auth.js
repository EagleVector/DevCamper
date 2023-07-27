const express = require('express');
const { register, login, getMe, forgotPassword } = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middlewares/auth')

router
  .post('/register', register)
  .post('/login', login)
  .get('/me', protect, getMe)
  .post('/forgotPassword', forgotPassword);

module.exports = router;