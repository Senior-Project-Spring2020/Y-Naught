var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    product = require('../models/ProductSchema');

var UserSchema = new Schema({

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
        items: [{ type: Schema.Types.Mixed, quantity: Number }]
    }
});

module.exports = User = mongoose.model('user', UserSchema);