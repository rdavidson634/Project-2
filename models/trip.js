const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSchema = new Schema ({
    course: String,
    website: String,
    rating: Number
}, {
    timestamps: true
});

let tripSchema = new Schema ({
    location: String,
    dates: Date,
    price: Number,
    course: [courseSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('trip', tripSchema);
