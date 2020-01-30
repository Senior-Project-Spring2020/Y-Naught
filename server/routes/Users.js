const express = require('express'),
    router = express.Router(),
    Users = require('../controllers/userController');

router.route('/')
    .get(Users.list)
    .post(Users.create);

router.route('/:userId')
    .get(Users.read)
    .put(Users.update)
    .delete(Users.delete);

router.param('userId', Users.userByID);
module.exports = router;