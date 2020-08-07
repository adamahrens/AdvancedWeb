const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String
    },
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }]
});

// Presave Hook
userSchema.pre('save', async function (next) {
    console.log('setting encrypted password hash');
    try {
        if (!this.isModified("password")) {
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});

// Instance methods
userSchema.methods.comparePassword = async function (pass, next) {
    try {
        let isMatch = await bcrypt.compare(pass, this.password);
        return isMatch;
    } catch (error) {
        console.log('Error using bcrypt')
        return next(error);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;