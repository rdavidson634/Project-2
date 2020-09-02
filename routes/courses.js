const express = require('express');
const router = express.Router();
const courseCtrl = require('../controllers/courses');

router.get('/trips/:id/courses/new', courseCtrl.new);

module.exports = router;

