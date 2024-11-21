const Session = require('../model/sessionModel.js');
const Message = require('../model/messageModel.js');
const mongoose = require('mongoose');

// Create a new session between two users
const createSession = async (user1Id) => {
    const newSession = new Session({
        participants: [user1Id, 2],
    });
    return await newSession.save();
};

// Find or create a session between two users
const findOrCreateSession = async (user1Id) => {
    let session = await Session.findOne({
        participants: { $all: [user1Id, 2] },
    });
    if (!session) {
        session = await createSession(user1Id);
    }
    return session?.sessionId;
};

// Add a new message to the session
const addMessageToSession = async (sessionId, senderId, content, timestamp) => {
    const message = new Message({
        sender: senderId, 
        content,
        session: sessionId,
        timestamp: timestamp.toString(),
    });
    const savedMessage = await message.save();
    console.log(savedMessage)
    try{
        let session = await Session.findOneAndUpdate(
            {sessionId:sessionId}, 
            {$push: { messages: savedMessage },
                 updatedAt: new Date()
        }
        );
    // const session = await Session.findByIdAndUpdate(sessionId, {
    //     $push: { messages: savedMessage },
    //     updatedAt: new Date()
    // });
    console.log(`written to db on session ${session}`)
    }
    catch(err){
        console.log(`Error in writing to db is ${err}`)
    }
    ;
};

// Fetch the message history for a session
const getSessionMessages = async (sessionId) => {
    const session = await Session.findById(sessionId).populate('messages');
    return session.messages;
};

module.exports = {
    getSessionMessages,
    addMessageToSession,
    findOrCreateSession,
    createSession
}