var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    product = require('../models/ProductSchema');

var userSchema = new Schema({

    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    },
    cart: {
        items:[{ type: product, quantity: Number}]
    }
});

module.exports = User = mongoose.model('user', UserSchema);