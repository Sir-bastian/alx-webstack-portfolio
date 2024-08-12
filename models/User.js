/**
 * Carriers model
 * This schema will be for companies and individuals
 *      with trucks and means to move goods and
 *      services for shippers.
 * It will hold basic info like name, email, contacts,
 *      fleet size, address, and availability, etc.
 */

const mongoose = require('mongoose');

//This defines the Carriers schema or Blueprint.
const carrierSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },
    displayNameame: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        require: true,
    },
    trucktype: {
        type: String,
        required: true
    },
    driverLicenseClass:{
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now  
    },
});

//creation of the Carrier model from the schema
const Carrier = mongoose.model('Carrier', carrierSchema);

//Shippers schema or Blueprint
const shipperSchema = mongoose.Schema({
    googleId: {
        type: String,
        required: true
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
    displayName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});

//Creation of the Shipper model from the schema
const Shipper = mongoose.model('Shipper', shipperSchema);

module.exports = {
    Shipper,
    Carrier
};