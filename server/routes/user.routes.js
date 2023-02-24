const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const router = express.Router();

router.use(express.json());

router.post('/', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User with this email already exists.');

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    password: hashedpassword,
    lastName: req.body.lastName
  });

  const realUser = await newUser.save();

  res.send(realUser);
});

module.exports = router;