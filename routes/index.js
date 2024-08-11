const express = require('express')
const router = express.Router()


//@desc     Landing Page
//@route    GET /
router.get('/', (req, res) => {
    console.log('Landing Page route hit');
    res.send('TransitNET');
});


//@desc     DashBoard
//@route    GET /dashboard
router.get('/dashboard', (req, res) => {
    console.log('Dashboard route hit');
    res.send('Dashboard');
});

module.exports = router;