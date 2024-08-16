const mongoose = require ('mongoose');

const carriersSchema = mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    }, 
    firstName: {
        type: String,
        min: 2,
        max: 100,
        required: true
    },
    lastName: {
        type: String,
        min: 2,
        max: 100,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        validate: { validator: function (value)
            { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); },
            message: 'Invalid email address format' }
    },
    vehicleType: { 
        type: String, 
        enum: ['Truck', 'Van', 'Semi-trailer', 'Other'], 
        required: true 
    },
    capacity: {
        type: Number,
        required: true 
    },
    availability: {
        type: Boolean,
        default: true
    }, // Indicates if the carrier is available
    insuranceInfo: { type: String

    }, // Optional insurance information
    createdAt: { 
        type: Date,
        default: Date.now 

    }  
});

const Carrier = mongoose.model('Carrier', carriersSchema);
module.exports = Carrier;