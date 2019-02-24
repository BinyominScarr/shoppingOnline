const mongoose = require('mongoose');

let cartSchema = new mongoose.Schema(

  {

    customerId: {
      type: String,
      required: true,
      unique: true
    },

    creationDate: {
      type: String,
      required: true,
    },

  }

);

let CartModel = mongoose.model('Cart', cartSchema);

module.exports = { CartModel }