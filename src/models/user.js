const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    lowercae: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not faild');
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    lowercae: true,
    minlength: 7,
    validate(value) {
      if (value.includes('password')) {
        throw new Error('Password cannot contain : password');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a postive number');
      }
    },
  },
});

module.exports = User;
