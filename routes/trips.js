var router = require('express').Router();
var tripCtrl = require('../controllers/trips')

/* GET users listing. */
router.get('/trips', tripCtrl.index);
router.get('/new', tripCtrl.new);





function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
