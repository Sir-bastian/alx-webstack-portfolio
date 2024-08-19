const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new localStrategy({ usernameField: 'email'},
        async (email, password, done) => {
            const user = await User.findOne({ email });
            if (!user) {
                return done(null, false, { message: 'No  user found with that email!' });
            }
            try {
                if ( await bcrypt.compare(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            } catch (error) {
                console.log(error);
                return done(error);
            }
        }));

        passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        passport.deserializeUser(async (id, done) => {
            const user = await User.findById(id);
            done(null, user);
        });
};