/**
 * User model
 * 
*/
const mongoose = require('mongoose');

//User schema or Blueprint
const UserSchema = mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        min: 2,
        max: 100,
        required: true,
    },
    lastName: {
        type: String,
        min: 2,
        max: 100,
        required: true
    },
    email: {
        type: String,
        rquired: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email addrress format',
        },
    },
    password: {
        type: String,
        min: 8,
        max: 30,
        required: true,
    },
    image: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;