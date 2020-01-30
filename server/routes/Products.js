const express = require('express'),
    router = express.Router(),
    Product = require('../controllers/ProductController');

router.route('/')
    .get(Product.list)
    .post(Product.create);

router.route('/:userID')
    .put(Product.update)
    .delete(Product.delete);

module.exports = router;