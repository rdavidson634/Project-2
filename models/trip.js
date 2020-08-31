var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema ({
    name: String,
    email: String,
    googleId: String,
    avatar: String 
})

let tripSchema = new Schema ({
    location: String,
    dates: Date,
    price: Number,
    comments: String,
    user: [userSchema],
    googleId: String
}, {
    timestamps: true
});



module.exports = mongoose.model('trip', tripSchema);
// module.exports = mongoose.model('user', userSchema);