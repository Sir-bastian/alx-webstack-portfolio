const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pickupLocation: {
        type: String,
    },
    deliveryLocation: {
        type: String,

    },
    pickupDate: { // when the shipment needs to be picked up
        type: Date,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    category: { // e.g. Furniture, electronics, documents.
        type: String,
        required: true,
    },
    sizeAndWeight: {
        type: String,
    },
    vehicleTypeAndCapacity: {
        type: String,
    },
    pricing: {
        type: String,
        required: true,
    },
    availablity: {
        type: String,
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

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;