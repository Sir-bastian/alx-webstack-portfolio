const express = require('express')
const router = express.Router()


//@desc     Landing Page
//@route    GET /
router.get('/', (req, res) => {
    console.log('Landing Page route hit');
    res.render('login');
});


//@desc     DashBoard
//@route    GET /dashboard
router.get('/dashboard', (req, res) => {
    console.log('Dashboard route hit');
    res.render('dashboard');
});

module.exports = router;