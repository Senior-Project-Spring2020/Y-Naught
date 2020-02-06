var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});




//Create mongoose model for database
var User = mongoose.model('User', userSchema);
module.exports = User;