const sessionService = require('../services/sessionService.js');

exports.startSession = async (req, res) => {
    const { user1Id, user2Id } = req.body;
    
    try {
        const session = await sessionService.findOrCreateSession(user1Id, user2Id);
        res.status(200).json(session);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.sendMessage = async (req, res) => {
    const { sessionId, senderId, content } = req.body;

    try {
        const message = await sessionService.addMessageToSession(sessionId, senderId, content);
        res.status(200).json(message);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSessionHistory = async (req, res) => {
    const { sessionId } = req.params;

    try {
        const messages = await sessionService.getSessionMessages(sessionId);
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};