const express = require('express'),
    router = express.Router(),
    Product = require('../models/ProductSchema'),
    { check, validationResult } = require('express-validator'),
    multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/');
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString() + file.originalname);
    }
});
const upload = multer({storage: storage});
// @route   POST /Products
// @desc    Create new product or update existing
// @access  Public
 
router.post('/:id?', [
    check('name', 'Name is required')
        .not().isEmpty(),
    check('price', 'Price is required')
        .not().isEmpty()
],upload.single('image'),
    async (req, res) => {
        const errors = validationResult(req);
        console.log(req.file);
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
            lngth,
            description,
        } = req.body;

        const image = req.file;
        //Build product object

        const productFields = {};
        productFields.name = name;
        productFields.price = price;
        if(image) productFields.image = image;
        if (size) productFields.size = size;
        if (brand) productFields.brand = brand;
        if (era) productFields.era = era;
        if (width) productFields.width = width;
        if (lngth) productFields.lngth = lngth;
        if (description) productFields.description = description;


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
// @route    GET /Products
// @desc     Get all products
// @access   Public
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    GET Products/:product_id/
// @desc     Get product by product id
// @access   Public
router.get('/:product_id', async (req, res) => {
    try {
        const product = await Product.findOne({
            _id: req.params.product_id
        });

        if (!product) return res.status(400).json({ msg: 'Product not found' });

        res.json(product);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Product not found' });
        }
        res.status(500).send('Server Error');
    }
});

// @route    DELETE /Products
// @desc     Delete product
// @access   Private
router.delete('/:product_id', async (req, res) => {
    try {

        await Product.findOneAndRemove({ _id: req.params.product_id });

        res.json({ msg: 'Product deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;