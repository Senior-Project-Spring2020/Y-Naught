const mongoose = require('mongoose'),
    User = require('../models/UserSchema');


exports.create = function (req, res) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            res.json(user);
            console.log(user)
        }
    });
};

exports.read = function (req, res) {
    res.json(req.user);
};

exports.list = function (req, res) {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "error"
            });
        });
};

exports.update = (req, res) => {

    User.findById(req.params.userId).then(user => {
        if (!user) {

            return res.status(404).send({
                message: "Error, no user found "
            });
        }
        else {
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;
            user.save(function (err) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with ID"
            });
        }
        return res.status(500).send({
            message: "Error updating user"
        });
    });
};

exports.delete = (req, res) => {

    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found"
                });
            }
            res.send({ message: "User deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "User not found"
                });
            }
            return res.status(500).send({
                message: "User not deleted"
            });
        });
};