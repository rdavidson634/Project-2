const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let tripSchema = new Schema ({
    location: String,
    dates: Date,
    price: Number,
    course: []
}, {
    timestamps: true
});


module.exports = mongoose.model('trip', tripSchema);
