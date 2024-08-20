/**
 * Function that protects routes.
 * That is, it checks  if user is authenticated,
 *  and responds accordingly.
 * For example an unLogged In User must not access the
 * dashboard.
 */

module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/login')
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect('/');
      }
    },
    /**
     * If user is already logged in and attemptsvto access the
     * registervor login screen, we redirect them to the Protected
     * dashboard screen
     */
    checkLoggedIn: function (req, res, next) {
        if (req.isAuthenticated()) {
            return res.redirect('/');
        }
        next();
    }
  };