var router = require('express').Router();
var tripsCtrl = require('../controllers/trips')

/* GET users listing. */
router.get('/trips', tripsCtrl.index);





function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
