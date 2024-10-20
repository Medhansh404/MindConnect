const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true }  // Link to session
});

module.exports = mongoose.model('Message', messageSchema);      