const mongoose = require('mongoose');

let categorySchema = new mongoose.Schema(

  {
    id: {
      type: Number,
      required: true,
      unique: true
    },

    category: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },

  }

);

let CategoryModel = mongoose.model('Category', categorySchema);

module.exports = { CategoryModel }
