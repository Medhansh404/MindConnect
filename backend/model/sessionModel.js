const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    participants: [{ type: Number}, {type: Number}], 
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],  
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    sessionId: {type: mongoose.Schema.Types.ObjectId, auto:true, unique:true}
});

module.exports = mongoose.model('Session', sessionSchema);