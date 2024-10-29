const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/', authController.handleLogin);
router.get('/', authController.handleLogout);

module.exports = router;