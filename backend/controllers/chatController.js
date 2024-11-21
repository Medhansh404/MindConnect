const sessionService = require('../services/sessionService.js');
const Session = require('../model/sessionModel.js');
const mongoose = require('mongoose');

const getAllChats = async (req, res) => {
    try{
        const chats = await Session.find();
        res.status(201).json(chats)
        
    }
    catch(err){
        console.log(err)
    }
};

// Start or find a session
const startSession =  async(userId) => {
    const user1Id = userId;
    try {
        const sessionId = await sessionService.findOrCreateSession(user1Id);
        return sessionId;
    } catch (err) {
        throw new Error(err.message); 
    }
};

// Send a message within a session
const sendMessage = async (data) => {
    const { sessionId, senderId, content, timestamp } = data;
    try {
        const message = await sessionService.addMessageToSession(sessionId, senderId, content, timestamp);
    } catch (err) {
        throw new Error(err.message); 
    }
};

// Get the message history for a session
const getSessionHistory = async (req, res) => {
    const { sessionId } = req.params;

    try {
        const messages = await sessionService.getSessionMessages(sessionId);
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllChats,
    startSession,
    sendMessage,
    getSessionHistory
}
