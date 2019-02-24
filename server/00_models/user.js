const mongoose = require('mongoose');

let userSchema = new mongoose.Schema(

  {

    firstName: {
      type: String,
      trim: true,
      match: /[A-Za-z]/,
      required: true,
      minlength: 3,
      maxlength: 15
    },

    lastName: {
      type: String,
      trim: true,
      match: /[A-Za-z]/,
      required: true,
      minlength: 3,
      maxlength: 15
    },

    email: {
      type: String,
      trim: true,
      match: /[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z]{1,}[.]?[a-zA-Z]{1,}/,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 254
    },

    password: {
      type: String,
      required: true,
      minlength: 64,
      maxlength: 64
    },

    israeliId: {
      type: String,
      trim: true,
      match: /[0-9]/,
      required: true,
      unique: true,
      minlength: 9,
      maxlength: 9
    },

    city: {
      type: String,
      trim: true,
      match: /[A-Za-z]/,
      required: true,
    },

    street: {
      type: String,
      trim: true,
      match: /[A-Za-z0-9]/,
      required: true,
    }

  }

);

let UserModel = mongoose.model('User', userSchema);

module.exports = { UserModel }