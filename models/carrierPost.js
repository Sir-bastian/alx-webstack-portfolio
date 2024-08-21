const mongoose = require('mongoose');

const carrierPostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    category: { // e.g. Furniture, electronics, documents.
        type: String,
    },
    vehicleTypeAndCapacity: {
        type: String,
        require: true,
    },
    pricing: {
        type: String,
        required: true,
    },
    availablity: {
        type: String,
        required: true,
    },
    termsAndConditions: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }

});

const carrierPost = mongoose.model('carrierPost', carrierPostSchema);

module.exports = carrierPost;