const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSchema = new Schema ({
    name: String,
    address: String,
    website: String,
    rating: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('course', tripSchema);