const mongoose = require('mongoose'),
    Product = require('../models/ProductSchema');


exports.create = function (req, res) {
    var product = new Product(req.body);
    product.save(function (err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(product);
            console.log(product);
        }
    });
};

exports.read = function (req, res) {
    res.json(req.product);
};

exports.list = function (req, res) {
    Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error"
            });
        });
};

exports.update = (req, res) => {

    Product.findById(req.params.productId).then(product => {
        if (!product) {

            return res.status(404).send({
                message: "Error, no product found "
            });
        }
        else {
            product.name = req.body.name;
            product.price = req.body.price;
            product.size = req.body.size;
            product.brand = req.body.brand;
            product.era = req.body.era;
            product.width = req.body.width;
            product.length = req.body.length;
            product.description = req.body.description;
            product.image = req.body.image;
            product.available = req.body.available;
            product.save(function (err) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.json(product);
                }
            });
        }
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with ID"
            });
        }
        return res.status(500).send({
            message: "Error updating product"
        });
    });
};

exports.delete = (req, res) => {

    Product.findByIdAndRemove(req.params.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found"
                });
            }
            res.send({ message: "Product deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Product not found"
                });
            }
            return res.status(500).send({
                message: "Product not deleted"
            });
        });
};