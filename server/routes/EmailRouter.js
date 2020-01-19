nodemailer = require('nodemailer'),
mongoose = require('mongoose'),
config = require('../config/config.js');

mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true}); //Connect database

var express = require('express');
var eRoute = express.Router();

let transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'y.naught.clothing@gmail.com',
    pass: config.EmailPass
  }
});


eRoute.post('/', (req, res, next) => { 
  var email = req.body.email; 

  var txt = 'Email test'

  const message = {
    from: 'studyedgescheduler@gmail.com',
    to: email,
    subject: 'Y-naught', 
    text: txt 
  };

  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log('Email sent' + info);
      res.status(200);
    }
  });

});

module.exports = eRoute;