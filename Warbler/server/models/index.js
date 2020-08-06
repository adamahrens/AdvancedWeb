const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promse = Promise;
mongoose.connect('mongodb://localhost/warbler', {
    keepAlive: true,
    userMongoClient: true
});