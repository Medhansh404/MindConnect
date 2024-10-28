const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http'); 
const { Server } = require('socket.io'); 
const mongoose = require('mongoose');
const app = express();
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const credentials = require('./middleware/credentials');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const chatController = require('./controllers/chatController'); // Assuming your chatController is in this path
const Message = require('./model/messageModel.js');
const { isDataView } = require('util/types');

const PORT = process.env.PORT || 8080;

// Create an HTTP server
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// custom middleware logger
app.use(logger);

// for chrome related issues in cors
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

app.use(cookieParser());

// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/diary', require('./routes/api/diary'));
app.get('/chatroom', require('./routes/chatroom'));

// JWT Verification middleware
//app.use(verifyJWT);

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

// Error Handler Middleware
app.use(errorHandler);

const mongoURI = process.env.MongoURI;
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinSession', async (userId, callback) => {
        try {
            const sessionId = await chatController.startSession(userId)
            socket.join(sessionId);
            console.log(`Client joined session: ${sessionId}`);
            callback(sessionId);
        }
        catch(err){
            console.log(`The sessionId is not being made because ${err}`)
        }
    });

const sessionMessages = new Map();

socket.on('sendMessage', (data) => {
    const { sessionId, senderId, content } = data;
    const message = data;

    if (!sessionMessages.has(sessionId)) {
        sessionMessages.set(sessionId, []);
    }
    sessionMessages.get(sessionId).push(message);
    console.log(message)
    io.emit('receiveMessage', message);
});

socket.on('saveMessage', async (sessionId) => {
    const id = sessionId;

    if (sessionMessages.has(id)) {
        const messages = sessionMessages.get(id);

        try {
            for (const msg of messages) {
                await chatController.sendMessage({ 
                    id, 
                    senderId: msg.senderId, 
                    content: msg.content, 
                    timestamp: msg.time 
                });
            }
        } catch (error) {
            console.error('Error saving messages on disconnect:', error.message);
        }

        sessionMessages.delete(sessionId);
    }
});
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
