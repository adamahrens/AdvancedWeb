const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.signin = function () { };
exports.signup = async function (request, response, next) {
    try {
        // Create a User
        let user = await db.User.create(request.body);
        let { id, username, profileImageUrl } = user;
        let token = jwt.sign({ id, username, profileImageUrl }, process.env.SECRET_KEY);
        return response.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
        // Create a Token (sign a token) process.env.SECRET_KEY
    } catch (error) {
        // What kind of error
        if (error.code === 11000) {
            error.message = 'Sorry, the username/email is already taken';
        }

        // if certain respond with username/email already taken
        return next({
            status: 400,
            message: error.message
        });
    }
};