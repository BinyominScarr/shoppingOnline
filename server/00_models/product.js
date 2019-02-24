const mongoose = require('mongoose');

let productSchema = new mongoose.Schema(

  {

    productName: {
      type: String,
      trim: true,
      match: /[A-Za-z0-9]/,
      required: true,
      unique: true
    },

    categoryId: {
      type: Number,
      match: /[1-4]/,
      required: true,
      unique: false
    },

    price: {
      type: Number,
      trim: true,
      match: /^(00|[1-9]{1}[0-9]{0,2})[.]{1}[0-9]{2}$/,
      required: true,
    },

    image: {
      type: String,
      trim: true,
      match: /^\S+(\.png|\.jpg|\.jpeg|\.svg)$/,
      required: true,
      unique: true
    }

  }

);

let ProductModel = mongoose.model('Product', productSchema);

module.exports = { ProductModel }
