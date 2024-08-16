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
    },
    password: {
        type: String,
        min: 8,
        max: 30,
        required: true,
    },
    role:{
        type: String,
        enum: ['carrier', 'shipper'],
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