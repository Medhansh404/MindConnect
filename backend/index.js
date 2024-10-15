const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const credentials = require('./middleware/credentials')
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 8080;

// custom middleware logger
app.use(logger);

// for chrome related issues in cors
app.use(credentials)
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

app.use(verifyJWT);



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

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));