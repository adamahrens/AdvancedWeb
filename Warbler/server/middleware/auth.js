require('dotenv').config();
const jwt = require('jsonwebtoken');

// Make sure a user is logged in - Authentication
exports.loginRequired = function (request, response, next) {
    // Get token from HTTP Header
    try {
        const token = request.headers.authorization.split(' ')[1]; // Bearer token

        // decode
        jwt.verify(token, process.env.SECRET_KEY, function (error, decoded) {
            if (decoded) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: 'Please login first'
                });
            }
        });
    } catch (error) {
        return next({
            status: 401,
            message: 'Please login first'
        });
    }
};

// Maker sure a user can perform that action - Authorization
exports.ensureCorrectUser = function (request, response, next) {
    try {
        const token = request.headers.authorization.split(' ')[1]; // Bearer token
        jwt.verify(token, process.env.SECRET_KEY, function (error, decoded) {
            // Does the url contain the id param? Does it match?
            if (decoded && decoded.id === request.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: 'Unauthorized'
                });
            }
        });
    } catch (error) {
        return next({
            status: 401,
            message: 'Unauthorized'
        });
    }
};