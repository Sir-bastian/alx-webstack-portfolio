const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const Shipper = require('../models/shippers');
const Carrier = require('../models/Carriers');

/**
 * @desc     Google Authentication
 * @route    GET /auth/google
 */
router.get('/google',
    passport.authenticate('google', { scope: ['profile'] }))

/**
 * @desc     Google auth callback
 * @route    GET /google/callback
 */
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login'} ),
    async (req, res) => {
        const user = req.user; //User object from Passport
        req.session.userId = user._id; // Store user ID in Session
        //check if user has a profile
        const hasProfile = await Shipper.findOne({ googleId: user.googleId }) || 
        await Carrier.findOne({ googleId: user.googleId });
        if(!hasProfile) {
            res.redirect('/profilesetup');
        } else {
            res.redirect('/dashboard');
        }
    }
)

/**
 * @desc        Logout user
 * @route       /auth/logout
 */
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            console.error('Error logging out:', err);
            return next(err);
        }
        res.redirect('/');
    });
});

module.exports = router;