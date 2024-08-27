/**
 * Route that will take a user to a page
 * to create a New Post for a shipping
 * requirement.
 */
const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/authentication');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const Post = require('../models/Post');

// @desc  Show add post page
// @route  GET /post/add
router.get('/add', ensureAuth, async (req, res) => {
    res.render('posts/addshipment');
});

//@desc process add form
//@route  POST /posts
router.post('/', ensureAuth, upload.single('image'), async (req, res) => {
    console.log(req.body)

    const { title, description, pickupLocation, deliveryLocation,
        pickupDate, contactInfo, category, sizeAndWeight, vehicleTypeAndCapacity,
        pricing, availability, termsAndConditions, Image} = req.body;

    // Check for required fields
    if (!title || !description || !contactInfo || !category ||
        !pricing || !termsAndConditions) {
        return res.status(400).json({ message: 'All required fields must be provided' });
    }

    try {
        const newPost = new Post({
            title,
            description,
            pickupLocation,
            deliveryLocation,
            pickupDate,
            contactInfo,
            category,
            sizeAndWeight,
            vehicleTypeAndCapacity,
            pricing,
            availability,
            termsAndConditions,
            Image: req.file ? req.file.path : undefined,
            author: req.user._id
        });
        await newPost.save();
        console.log('Post created successfully!')
        res.redirect('/')
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;