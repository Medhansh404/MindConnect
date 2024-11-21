const express = require('express');
const chatController = require('../controllers/chatController.js');
const router = express.Router();

router.get('/', chatController.getAllChats) 
//router.get('/history', chatController.getSessionHistory); 


module.exports = router;