var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema ({
    name: String,
    email: String,
    googleId: String,
    avatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);