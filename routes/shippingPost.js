/**
 * Route that will take a user to a page
 * to create a New Post for a shipping
 * requirement.
 */
const express = require('express');
const router = express.Router();
const shippingPost = require('../models/shippingPost');
const { ensureAuth } = require('../middlewares/authentication');

// @desc  process add form to create a post
// @route  GET /shippingPost/add
router.get('/add', ensureAuth, async (req, res) => {
    res.render('posts/addshipment');
});

//@desc Functionality to create Post
//@route  POST /shippingPost
router.post('/', ensureAuth, async (req, res) => {

    const { title, description, pickupLocation, deliveryLocation, 
        pickupDate, contactInfo, category, sizeAndWeight, 
        termsAndConditions, Image } = req.body;

    // Check for required fields
    if (!title || !description || !pickupLocation || !deliveryLocation 
        || !pickupDate || !contactInfo || !category || 
        !sizeAndWeight || !termsAndConditions) {
        return res.status(400).json({ message: 'All required fields must be provided' });
    }

    try {
        const newPost = new shippingPost({
            title,
            description,
            pickupLocation,
            deliveryLocation,
            pickupDate,
            contactInfo,
            category,
            sizeAndWeight,
            termsAndConditions,
            Image
        });
        await newPost.create();
        res.redirect('/')
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;