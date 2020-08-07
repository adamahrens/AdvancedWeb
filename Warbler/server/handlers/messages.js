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

// GET - /api/users/:id/messages/:message_id
exports.getMessage = async function (request, response, next) {
    try {
        let message = await db.Message.findById(request.params.message_id);
        return response.status(200).json(message);
    } catch (error) {
        return next(error);
    }
};

// DELETE - /api/users/:id/messages/:message_id
exports.deleteMessage = async function (request, response, next) {
    try {
        let foundMessage = await db.Message.findById(request.params.message_id);
        await foundMessage.remove();
        return response.status(200).json(foundMessage)
    } catch (error) {
        return next(error);
    }
};