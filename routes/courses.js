const express = require('express');
const router = express.Router();
const courseCtrl = require('../controllers/courses');


router.post('/trips/:id', courseCtrl.create)

module.exports = router;

