'use strict'

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: {
      type: String,
      required: true,
      unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Product', productSchema)