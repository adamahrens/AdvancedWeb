const db = require('../models/index');
const jwt = require('jsonwebtoken');

exports.signin = async function (request, response, next) {
    try {
        let user = await db.User.findOne({ email: request.body.email }).exec();
        console.log(`Found user ${user}`);
        let { id, username, profileImageUrl } = user;
        let isMatch = await user.comparePassword(request.body.password)
        console.log(`is match? ${isMatch}`);
        if (isMatch) {
            let token = jwt.sign({ id, username, profileImageUrl }, process.env.SECRET_KEY);
            return response.status(200).json({
                id,
                username,
                profileImageUrl,
                token
            });
        }

        console.log('Was not a match, return error');
        return next({
            status: 400,
            message: 'Invalid Email or Password'
        })
    } catch (error) {
        console.log('catch block executed');
        console.log(error.message);
        return next({
            status: 400,
            message: 'Invalid Email or Password'
        })
    }
};

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