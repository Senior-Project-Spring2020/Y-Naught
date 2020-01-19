var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({

    username: { type: String, required: true, index: true },
    password: { type: String, required: true, index: true },
    email: { type: String, required: true, index: true }

});

//Create mongoose model for database
var User = mongoose.model('User', userSchema);
module.exports = User