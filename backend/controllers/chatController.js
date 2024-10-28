const sessionService = require('../services/sessionService.js');

// Start or find a session
exports.startSession = async (userId) => {
    const user1Id = userId;
    
    try {
        const sessionId = await sessionService.findOrCreateSession(user1Id);
        return sessionId;
    } catch (err) {
        throw new Error(err.message); 
    }
};

// Send a message within a session
exports.sendMessage = async (data) => {
    const { sessionId, senderId, content } = data;
    
    try {
        const message = await sessionService.addMessageToSession(sessionId, senderId, content);
        return message; 
    } catch (err) {
        throw new Error(err.message); 
    }
};

// Get the message history for a session
exports.getSessionHistory = async (req, res) => {
    const { sessionId } = req.params;

    try {
        const messages = await sessionService.getSessionMessages(sessionId);
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
