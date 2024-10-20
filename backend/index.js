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
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinSession', (sessionId) => {
        socket.join(sessionId);
        console.log(`Client joined session: ${sessionId}`);
    });

    socket.on('sendMessage', async (data) => {
        const { sessionId, senderId, content } = data;

        try {
            const message = await chatController.sendMessage({ sessionId, senderId, content });

            io.to(sessionId).emit('receiveMessage', message);
        } catch (error) {
            console.error('Error sending message:', error.message);
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
