var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const Admin = new Schema({
   
	email: { type: String, unique: false, required: false }, 
    password: { type: String, unique: false, required: false }

});

module.exports = mongoose.model('Admin', Admin);