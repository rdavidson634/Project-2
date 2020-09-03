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
  trip.userId = req.user._id;
  trip.save(function(err) {
    if (err) return render('trips/new', { title: 'New Trip' });
    
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
    // console.log(trip)
    if (!trip.userId.equals(req.user._id)) return res.redirect('/trips/show');
    res.render('trips/edit', {trip})
  })
}


function update (req, res) {
  Trip.findByIdAndUpdate(req.params.id, req.body, function(err, trip) {
    res.render('trips/show', {trip})
    })
  }
  



