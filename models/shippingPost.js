const mongoose = require('mongoose');

const shippingPostSchema = mongoose.Schema({
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
        required: true,
    },
    deliveryLocation: {
        type: String,
        required: true,
    },
    pickupDate: { // when the shipment needs to be picked up
        type: Date,
        required: true,
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

const shippingPost = mongoose.model('shippingPost', shippingPostSchema);

module.exports = shippingPost;