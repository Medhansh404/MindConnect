const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: { type: Number,  required: true },
    content: { type: String, required: true },
    timestamp: { type: String, default: Date.now.toString() }
});

module.exports = mongoose.model('Message', messageSchema);      