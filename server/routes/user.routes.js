const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const router = express.Router();
const auth = require('./../middleware/auth');

router.use(express.json());

router.post('/', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User with this email already exists.');

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: hashedpassword,
  });

  const realUser = await newUser.save();

  res.send(realUser);
});

router.post('/summary', auth, async (req, res) => {
  const userData = await User.findById(req.user._id);
  let userObj = userData;

  userObj.summaries.push({
    date: req.body.date,
    day_rating: req.body.day_rating,
    tasks: req.body.tasks
  })

  await User.findByIdAndUpdate(req.user._id, userObj, {
    new: true
  });

  res.send("Done successfully");
});

module.exports = router;