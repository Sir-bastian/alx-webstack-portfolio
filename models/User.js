const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 8,
        max: 50,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;