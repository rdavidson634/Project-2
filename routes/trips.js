var router = require('express').Router();
var tripCtrl = require('../controllers/trips')

/* GET users listing. */
router.get('/trips', tripCtrl.index);
router.get('/new', isLoggedIn, tripCtrl.new);
router.post('/', tripCtrl.create);
router.get('/:id', tripCtrl.show);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
