const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Two users in the session
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],  // References to message documents
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);