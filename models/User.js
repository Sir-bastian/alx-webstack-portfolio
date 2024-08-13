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
    username:{
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});

//Creation of the User model from the schema
module.exports = mongoose.model('User', UserSchema);