var mongoose = require('mongoose');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
const bcrypt = require('bcryptjs');
var Admin = require('../models/AdminSchema');
const { check, validationResult } = require('express-validator');
const config = require('config');
const auth = require('../routes/Middleware/Auth');
var bodyParser = require('body-parser');

router.get('/login', auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post(
  '/register', 
  [
    check('email', 'Enter email').isEmail(),
    check( 'password', 'Please enter a password with 6 or more characters').isLength({min: 6})
  ],
  async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      return res.status(400).json({errors: errors.array() });
    }

    const {email, password} = req.body;

    try
    {
      let admin = await Admin.findOne({email});

      if(admin)
      {
        return res.status(400).json({errors: [{msg: 'Admin already exists'}]});
      }

      admin = new Admin
      ({
        email,
        password
      });
      const salt = await bcrypt.genSalt(10);

      admin.password = await bcrypt.hash(password, salt);

      await admin.save();

      const payload = {
        admin: {
          id: admin.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {expiresIn: 360000},
        (err, token) =>{ 
          if (err) throw err;
          res.json({token});
        }
      );
    } catch(err){
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
  module.exports = router;