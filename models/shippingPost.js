const mongoose = require('mongoose');

const shippingPostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
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
        type: String,
        require: true,
    },
    contactInfo: {
        type: String,
        require: true,
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
    }

});

const shippingPost = mongoose.model('shippingPost', shippingPostSchema);

module.exports = shippingPost;