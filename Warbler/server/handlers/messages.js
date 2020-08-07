const db = require('../models');
exports.createMessage = async function (request, response, next) {
    try {
        let message = await db.Message.create({
            text: request.body.text,
            user: request.params.id
        });
        let user = await db.User.findById(request.params.id).exec();
        user.messages.push(message);
        await user.save();
        let foundMessage = await db.Message.findById(message._id).populate("user", { username: true, email: true });
        return response.status(200).json(foundMessage);
    } catch (error) {
        return next(error);
    }
};

exports.getMessage = async function (request, response, next) {

};

exports.deleteMessage = async function (request, response, next) {

};