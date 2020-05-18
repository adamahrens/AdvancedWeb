var express = require('express');
var bodyParser = require('body-parser')
var axios = require('axios');
var cors = require('cors');

app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
var todoRoutes = require('./routes/todos')
app.use('/api', todoRoutes);

// Start
app.listen(3001, function () {
    console.log('express app running at http://localhost:3001')
})