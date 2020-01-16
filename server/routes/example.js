const express = require('express'),
    router = express.Router()

router.get('/', (req, res) => res.send('Example Route'));

module.exports = router;