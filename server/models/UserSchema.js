var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({

    username: { type: Date, required: true, index: true },
    password: { type: String, required: true, index: true },
    email: { type: String, required: true, index: true }

});

userSchema.pre('save', function (next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

//Create mongoose model for database
var user = mongoose.model('User', userSchema);
module.exports = user