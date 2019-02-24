const mongoose = require('mongoose');

let productInCartSchema = new mongoose.Schema(

  {

    productId: {
      type: String,
      match: /[0-9]/,
      required: true,
    },

    quantity: {
      type: Number,
      match: /[0-9]/,
      required: true
    },

    price: {
      type: Number,
      trim: true,
      match: /^([0-9]{1}|[0-9](.){1}([0-9]){2})$/,
      required: true
    },

    cartId: {
      type: String,
      required: true,
      unique: false
    }

  }

);

let ProductInCartModel = mongoose.model('ProductInCart', productInCartSchema);

module.exports = { ProductInCartModel }
