const express = require('express')
const router = express.Router()
const {isloggedIn} = require('../middlewares/auth')


//@desc     Landing Page
//@route    GET /
router.get('/', (req, res) => {
    console.log('Landing Page route hit');
    res.render('login', {
        layout: 'loginlayout',
    });
});


//@desc     DashBoard
//@route    GET /dashboard
router.get('/dashboard', isloggedIn, (req, res) => {
    console.log('Dashboard route hit');
    //only LoggedIn users must and can access this page
    res.render('dashboard');
});

module.exports = router;