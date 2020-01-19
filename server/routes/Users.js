const express = require('express'),
    router = express.Router(),
    Users = require('../controllers/userController');

router.route('/')
    .get(Users.list)
    .post(Users.create);

router.route('/:userID')
    .put(Users.update)
    .delete(Users.delete);

module.exports = router;