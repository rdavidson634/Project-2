const Trip = require('../models/trip');

module.exports = {
    index,
    new: newTrip

  };


  function index(req, res) {
    Trip.find({}, function(err, trips) {
        res.render('trips/index', {trips, title: 'Trips' });
    });
}

function newTrip (req, res) {
  res.render('trips/new', { title: 'New Trip'})
}