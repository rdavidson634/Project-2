var express = require('express');
var router = express.Router();
var tripCtrl = require('../controllers/trips')

/* GET users listing. */
router.get('/', tripCtrl.index);
router.get('/new', tripCtrl.new);
router.get('/:id', tripCtrl.show);
router.post('/', tripCtrl.create);





function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
