const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema(

  {

    customerId: {
      type: String,
      required: true,
    },

    cartId: {
      type: String,
      required: true,
    },

    total: {
      type: Number,
      trim: true,
      match: /^[0-9]*(\.)?([0-9])+[$]{1}$/,
      required: true,
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
    },

    shippingDate: {
      type: String,
      required: true,
    },

    orderDate: {
      type: String,
      required: true,
    },

    fourLastDigits: {
      type: String,
      match: /[0-9]{4}/,
      required: true
    }

  }

);

let OrderModel = mongoose.model('Order', orderSchema);

module.exports = { OrderModel }
