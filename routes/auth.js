const express = require('express');
const router = express.Router();
const passport = require('passport');


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
    (req, res) => {
        res.redirect('/dashboard')
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