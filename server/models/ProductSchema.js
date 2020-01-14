var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({

    name: { type: Date, required: true },
    price: { type: String, required: true },
    size: String

});

ProductSchema.pre('save', function (next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});

//Create mongoose model for database
var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;