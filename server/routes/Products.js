const express = require('express'),
    router = express.Router(),
    Product = require('../models/ProductSchema'),
    { check, validationResult } = require('express-validator');

// @route   POST /Products
// @desc    Create new product
// @access  Public

router.post('/:id?', [
    check('name', 'Name is required')
        .not().isEmpty(),
    check('price', 'Price is required')
        .not().isEmpty()
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            name,
            price,
            size,
            brand,
            era,
            width,
            length,
            description,
            image
        } = req.body;

        //Build product object

        const productFields = {};
        productFields.name = name;
        productFields.price = price;
        if (size) productFields.size = size;
        if (brand) productFields.brand = brand;
        if (era) productFields.era = era;
        if (width) productFields.width = width;
        if (length) productFields.length = length;
        if (description) productFields.description = description;
        if (image) productFields.image = image;

        try {

            let product = await Product.findOne({ _id: req.params.id });

            if (product) {
                //update

                product = await Product.findOneAndUpdate(
                    { _id: req.params.id },
                    { $set: productFields },
                    { new: true }

                );
                return res.json(product);
            }

            //Create
            product = new Product(productFields);
            await product.save();
            res.json(product);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);
module.exports = router;