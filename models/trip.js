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
    userId: {type: Schema.Types.ObjectId, ref: 'user'},
    location: String,
    dates: Date,
    price: Number,
    course: [courseSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('trip', tripSchema);
