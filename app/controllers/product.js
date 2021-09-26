'use strict'

const Product = require('../models/product')

module.exports = {

  find: async (req, res) => {
    const products = await Product.find()

    return res.json({ products })
  },

  findOne: async (req, res) => {
    const id = req.params.product_id
    const product = await Product.findOne({ id })

    if (!product) return res.status(404).json({ error: 'Product not found' })

    return res.json({ product })
  },

  insertOne: async (req, res) => {
    const { title, quantity, price } = req.body

    const product = new Product({ title, quantity, price })
    await product.save()

    return res.status(201).json({ product })
  },

  updateOne: async (req, res) => {
    const id = req.params.product_id

    const dbResponse = await Product.updateOne({ id }, { ...req.body })

    if (dbResponse.modifiedCount === 0) return res.status(404).json({ error: 'Nothing was updated' })

    return res.status(200).json({ message: 'Product updated' })
  },

  deleteOne: async (req, res) => {
    const dbResponse = await Product.deleteOne({ id: req.params.product_id })

    if (dbResponse.deletedCount === 0) return res.status(404).json({ error: 'Product not found' })

    return res.status(200).json({ message: 'Product deleted' })
  },

}
