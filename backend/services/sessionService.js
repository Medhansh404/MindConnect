const Session = require('../model/sessionModel.js');
const Message = require('../model/messageModel.js');

// Create a new session between two users
exports.createSession = async (user1Id, user2Id) => {
    const newSession = new Session({
        participants: [user1Id, user2Id],
    });
    return await newSession.save();
};

// Find or create a session between two users
exports.findOrCreateSession = async (user1Id, user2Id) => {
    let session = await Session.findOne({
        participants: { $all: [user1Id, user2Id] },
    }).populate('messages');

    if (!session) {
        session = await exports.createSession(user1Id, user2Id);
    }
    return session;
};

// Add a new message to the session
exports.addMessageToSession = async (sessionId, senderId, content) => {
    const message = new Message({
        sender: senderId,
        content,
        session: sessionId
    });
    const savedMessage = await message.save();

    // Update session with the new message
    const session = await Session.findByIdAndUpdate(sessionId, {
        $push: { messages: savedMessage._id },
        updatedAt: new Date()
    });

    return savedMessage;
};

// Fetch the message history for a session
exports.getSessionMessages = async (sessionId) => {
    const session = await Session.findById(sessionId).populate('messages');
    return session.messages;
};