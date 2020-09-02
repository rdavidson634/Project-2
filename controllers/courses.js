const Trip = require('../models/trip');

module.exports = {
    create,
    new: newCourse
}

function create(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
        trip.course.push(req.body);
        trip.save(function(err) {
            res.redirect(`/trips/${req.params.id}`)
        })
    })
}

function newCourse(req, res) {
    res.redirect('../courses/new')
}