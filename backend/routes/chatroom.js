const express = require('express');
const chatController = require('../controllers/chatController.js');
const router = express.Router();

router.post('/chat/start-session', chatController.startSession);  
router.post('/chat/send-message', chatController.sendMessage);     
router.get('/chat/session/:sessionId', chatController.getSessionHistory); 

module.exports = router;