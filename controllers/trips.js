const Trip = require('../models/trip');


module.exports = {
    index,
    new: newTrip,
    create,
    show,
    delete: deleteTrip,
    edit,
    update
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

function deleteTrip (req, res) {
  Trip.findByIdAndDelete(req.params.id, function(err) {
    res.redirect('/trips');
  });
}

function edit (req, res) {
  Trip.findById(req.params.id, function(err, trip) {
    console.log(trip)
    res.render('trips/edit', {trip})
  })
}


function update (req, res) {
  console.log(req.params.id)
  Trip.update(req.params.id, function(err) {

    res.redirect(`/trips/${req.params.id}`)
  })
};

