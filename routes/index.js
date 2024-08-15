const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { isloggedIn } = require('../middlewares/auth');
const { urlencoded } = require('body-parser');

//@desc     Landing Page
//@route    GET /
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'loginlayout',
    });
});


//@desc     DashBoard
//@route    GET /dashboard
router.get('/dashboard', isloggedIn, (req, res) => {
    console.log('Dashboard route hit');
    //only LoggedIn users must and can access this page
    res.render('dashboard', {
        name: req.user.firstName
    });
});

module.exports = router;