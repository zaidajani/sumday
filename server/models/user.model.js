const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  summaries: {
    type: Array
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jsonwebtoken.sign({ _id: this._id }, 'mysecret');
  return token;
}

module.exports = mongoose.model('User', userSchema);