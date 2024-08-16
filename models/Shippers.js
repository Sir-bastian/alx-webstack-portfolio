const mongoose = require('mongoose');

const shippersSchema = mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true,
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
    comapnyName: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        require: true,
        validate: { validator: function (value)
            { return /^\d{10}$/.test(value); }, message: 'Invalid phone number format' }
    },
    shippingCapacity: {
        type: String,
        enum: ['Smmall', 'Medium', 'Large'],
        required: true,
    },
    industry: {
        type: String,
    },
    termsAndConditions: {
        type: String,
    },
    image: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});

const Shipper = mongoose.model('Shipper', shippersSchema);

module.exports = Shipper;