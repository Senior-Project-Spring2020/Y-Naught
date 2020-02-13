var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');


const Admin = new Schema({
   
	username: { type: String, unique: false, required: false }, 
	password: { type: String, unique: false, required: false }

});

Admin.pre('save', function (next) {
    var admin = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(admin.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                admin.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

Admin.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Admin', Admin);