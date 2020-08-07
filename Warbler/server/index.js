const dotenv = require('dotenv')
const result = dotenv.config();

if (result.error) {
    throw result.error
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error')
const cors = require('cors');
const PORT = 8081;
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const db = require('./models');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

// Middleware executed in the order specified
app.use('/api/users/:id/messages', loginRequired, ensureCorrectUser, messageRoutes);

app.get('/api/messages', loginRequired, async function (request, response, next) {
    try {
        let messages = await db.Message.find().sort({ createdAt: 'desc' }).populate('user', { username: true, profileImageUrl: true })
        return response.status(200).json(messages);
    } catch (error) {
        return next(error);
    }
});

app.use(function (request, response, next) {
    let error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`Server is starting on port ${PORT}`);
    console.log(`Secret is ${process.env.SECRET_KEY}`);
});