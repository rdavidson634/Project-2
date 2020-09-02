const Course = require('../models/course');

module.exports = {
    new: newCourse
}

function newCourse (req, res) {
    res.render('courses/new')
}