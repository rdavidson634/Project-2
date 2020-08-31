const Trip = require('../models/trip');

module.exports = {
    index,
    new: newTrip,
    create,
    show

  };


  function index(req, res) {
    Trip.find({}, function(err, trips) {
        res.render('trips/index', { trips, title: 'Trips' });
    });
};

function newTrip (req, res) {
  res.render('trips/new', { title: 'New Trip'})
}

function create (req, res) {
  let trip = new Trip(req.body);
  trip.save(function(err) {
    if (err) {
      return res.render('trips/new', { title: 'New Trip' });
    }
    res.redirect('/trips');
  })
}

function show (req, res) {
  Trip.findById(req.params.id, function(err, trip) {
    res.render('trips/show', {trip, title: 'Details'})
  })
}