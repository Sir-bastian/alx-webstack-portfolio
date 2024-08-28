const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const moment = require('moment');
const Post = require('../models/Post')
const { ensureAuth, checkLoggedIn } = require('../middlewares/authentication');
const { getUserPosts, getOtherUsersPosts } = require('../middlewares/getPosts');

// Post functiion handling all registration requests.
router.post('/register', checkLoggedIn, async (req, res) => {
    console.log(req.body);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            id: Date.now().toString(),
            fullName: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.log(error);
        res.redirect('/register');
    }
});


// Logging In POST configuring
router.post('/login', checkLoggedIn, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))


// Route to Home Page
router.get('/', ensureAuth, async (req, res) => {
    try {
        const posts = await Post.find({ user: req.user.id }).lean();
        res.render('index', { 
            name: req.user.fullName,
            formatDate: (date, format) => moment(date).format(format), //Using moment.js for date formatting
            posts
        });
    } catch (error) {
        console.error(error);
        res.render('error/500');
    }
});

//Login route
router.get('/login', checkLoggedIn ,(req, res) => {
    res.render('login');
});

//Account Registration Page
router.get('/register', checkLoggedIn, (req, res) => {
    res.render('register');
});


// LogOut Route
router.post('/logout', (req, res) => {
    req.logOut(function(err) {
        if (err) { return next(err); }

        res.redirect('/login');
        console.log('------> User Logged Out');
    })
});

module.exports = router;