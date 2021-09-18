'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
    User Schema
**/
var UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  introduction: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  introduction: {
    type: String
  },
  experience: {
    type: Number
  },
  achievements: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

//exports the user schema
module.exports = mongoose.model('users', UserSchema, 'users');