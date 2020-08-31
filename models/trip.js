var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSchema = new Schema ({
    name: String,
    address: String,
    website: String,
    rating: Number
})

let tripSchema = new Schema ({
    location: String,
    dates: Date,
    price: Number,
    comments: String,
    course: [courseSchema],
}, {
    timestamps: true
});


module.exports = mongoose.model('trip', tripSchema);
