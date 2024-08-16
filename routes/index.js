const express = require('express');
const router = express.Router();
const { isloggedIn } = require('../middlewares/auth');
const User = require('../models/User');


//@desc     Landing Page
//@route    GET /
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'loginlayout',
    });
});


//@desc Complete Profile
//@route GET /profile setup
router.get('/profilesetup', async (req, res) => {
    console.log('Profile completion page hit')
    try {
        const userId = req.session.userId;
    res.render('profilesetup',
        {userId});
    } catch (error) {
        console.log(error)
    } 
});

//@desc Profile Completion
//@route  POST /profilesetup
router.post('/profilesetup', async (req, res) => {
    console.log(req.headers)
    const { userId, role } = req.body;
    try {
        const user = await User.findById(userId);
        if (role === 'shipper') {
            const newShipper = new Shipper({
                googleId: user.googleId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                companyName: user.companyName,
                address: user.address,
                phoneNumber: user.phoneNumber,
                shippingCapacity: user.shippingCapacity,
                industry: user.industry,
                termsAndConditions: user.termsAndConditions,
            })
            await newShipper.save();
        } else if ( role === 'Carrier') {
            const newCarrier = new Carrier({
                googleId: user.googleId,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                vehicleType: user.vehicleType,
                capacity: user.capacity,
                availability: user.availability,
                insuranceInfo: user.insuranceInfo,
            })
            await newCarrier.save();
        }
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ error: 'Failed to create profile' });
    }
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