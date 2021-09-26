'use strict'

const router = require('express').Router()

const productController = require('../controllers/product')

router.get('/', productController.find)
router.post('/', productController.insertOne)
router.get('/:product_id', productController.findOne)
router.patch('/:product_id', productController.updateOne)
router.delete('/:product_id', productController.deleteOne)

module.exports = router