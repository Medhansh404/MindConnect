const sessionService = require('../services/sessionService.js');

// Start or find a session
exports.startSession = async (req, res) => {
    const { user1Id, user2Id } = req.body;
    
    try {
        const session = await sessionService.findOrCreateSession(user1Id, user2Id);
        res.status(200).json(session);
    } catch (err) {
        res.status(500).json({ error: err.message });
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
