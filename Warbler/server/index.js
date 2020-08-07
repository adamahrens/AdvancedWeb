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

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages', messageRoutes);

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