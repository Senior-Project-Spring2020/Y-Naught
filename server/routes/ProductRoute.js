const product = require('../controllers/ProductController.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(product.list)
  .post(product.create);
  
module.exports = router;