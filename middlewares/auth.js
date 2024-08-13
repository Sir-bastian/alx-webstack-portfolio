module.exports = {
    /** 
     * Middleware function that checks if user is logged in or not
     * 
     */
    isloggedIn: function (req, res, next) {
        if (req.user) {
            //if user is logged in, grant access to [certain routes]
            return next()
        } else {
            //if not logged in, then redirect to login
            res.redirect('/');
        }
    }
}