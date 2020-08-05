const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error')
const cors = require('cors');
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use(function (request, response, next) {
    let error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`Server is starting on port ${PORT}`);
});