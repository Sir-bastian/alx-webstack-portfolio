const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const flash = require('express-flash');

// Post functiion handling all registration requests.
router.post('/register', async (req, res) => {
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
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
}))


// Route to Home Page
router.get('/', (req, res) => {
    res.render('index.ejs');
});

//Login route
router.get('/login',(req, res) => {
    res.render('login.ejs');
});

//Account Registration Page
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

module.exports = router;