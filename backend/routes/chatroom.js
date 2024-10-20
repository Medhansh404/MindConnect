const express = require('express');
const chatController = require('../controllers/chatController.js');
const router = express.Router();

router.post('/chat/start-session', chatController.startSession);  // Start/find a session
router.post('/chat/send-message', chatController.sendMessage);     // Send a message
router.get('/chat/session/:sessionId', chatController.getSessionHistory);  // Get session history

module.exports = router;